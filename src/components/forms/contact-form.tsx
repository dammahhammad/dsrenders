'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { CONTACT_CONFIG } from '@/lib/config/contact';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting?: boolean;
  submitStatus?: 'idle' | 'success' | 'error';
  showCancelButton?: boolean;
  onCancel?: () => void;
  className?: string;
}

export default function ContactForm({
  onSubmit,
  isSubmitting = false,
  submitStatus = 'idle',
  showCancelButton = false,
  onCancel,
  className = '',
}: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      await onSubmit(data);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <User className="h-4 w-4" />
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4" />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <MessageSquare className="h-4 w-4" />
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="What's this about?"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me more about your project, question, or just say hello!"
                    className="min-h-[100px] resize-none"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                  Failed to send message. Please try again or contact me directly at{' '}
                  <a
                    href={`mailto:${CONTACT_CONFIG.FALLBACK_EMAIL}`}
                    className="underline hover:no-underline"
                  >
                    {CONTACT_CONFIG.FALLBACK_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            {showCancelButton && onCancel && (
              <Button
                type="button"
                onClick={onCancel}
                disabled={isSubmitting}
                className="px-6 border bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800 dark:border-zinc-600"
              >
                Cancel
              </Button>
            )}

            <Button
              type="submit"
              variant="outline"
              disabled={isSubmitting}
              className={`px-6 transition-all duration-200 ${isSubmitting
                  ? 'bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-400'
                  : 'bg-black text-white hover:bg-zinc-700 hover:text-white dark:bg-white dark:text-black dark:hover:bg-zinc-300 hover:scale-105'
                }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
