import { useState } from 'react';
import { type ContactFormData } from '@/lib/validations/contact';
import { CONTACT_CONFIG } from '@/lib/config/contact';

interface UseContactFormReturn {
    isSubmitting: boolean;
    submitStatus: 'idle' | 'success' | 'error';
    submitForm: (data: ContactFormData) => Promise<void>;
    resetStatus: () => void;
}

export function useContactForm(): UseContactFormReturn {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const submitForm = async (data: ContactFormData): Promise<void> => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), CONTACT_CONFIG.REQUEST_TIMEOUT);

            const response = await fetch(CONTACT_CONFIG.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            const result = await response.json();

            if (!response.ok || result.error) {
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitStatus('success');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error('Request timed out. Please check your connection and try again.');
            }
            throw error;
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetStatus = () => {
        setSubmitStatus('idle');
    };

    return {
        isSubmitting,
        submitStatus,
        submitForm,
        resetStatus,
    };
}
