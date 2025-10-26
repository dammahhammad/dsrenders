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
            // Create FormData with proper field names
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('subject', data.subject);
            formData.append('message', data.message);
            formData.append('timestamp', new Date().toISOString());
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), CONTACT_CONFIG.REQUEST_TIMEOUT);

            try {
                await fetch(CONTACT_CONFIG.GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors',
                    signal: controller.signal,
                });

                clearTimeout(timeoutId);
                setSubmitStatus('success');
            } catch (fetchError) {
                clearTimeout(timeoutId);
                if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                    throw new Error('Request timed out. Please check your connection and try again.');
                }
                throw fetchError;
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
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
