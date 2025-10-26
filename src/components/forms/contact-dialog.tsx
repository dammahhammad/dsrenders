'use client';

import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ContactForm from './contact-form';
import { useContactForm } from '@/hooks/use-contact-form';
import { CONTACT_CONFIG } from '@/lib/config/contact';

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ isOpen, onOpenChange }: ContactDialogProps) {
  const { isSubmitting, submitStatus, submitForm, resetStatus } = useContactForm();

  // Auto-close dialog on successful submission
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        onOpenChange(false);
        resetStatus();
      }, CONTACT_CONFIG.SUCCESS_AUTO_CLOSE_DELAY);
      return () => clearTimeout(timer);
    }
  }, [submitStatus, onOpenChange, resetStatus]);

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
      resetStatus();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            I&apos;d love to hear from you! Send me a message and I&apos;ll respond as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <ContactForm
          onSubmit={submitForm}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          showCancelButton={true}
          onCancel={handleClose}
          className="mt-6"
        />
      </DialogContent>
    </Dialog>
  );
}