import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Email form schema
export const emailSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

export type EmailFormData = z.infer<typeof emailSchema>;

export const sendEmail = async (data: EmailFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject,
      message: data.message,
    };

    await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID!,
      process.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.VITE_EMAILJS_PUBLIC_KEY!
    );
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email');
  }
};

/**
 * Format email content from form data
 */
export const formatEmailContent = (data: EmailFormData): string => {
  return `
    Name: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Phone: ${data.phone}` : ''}
    Subject: ${data.subject}
    
    Message:
    ${data.message}
  `;
};

/**
 * Get email configuration from environment
 */
export const getEmailConfig = () => {
  return {
    serviceId: process.env.VITE_EMAIL_SERVICE_ID || '',
    templateId: process.env.VITE_EMAIL_TEMPLATE_ID || '',
    userId: process.env.VITE_EMAIL_USER_ID || '',
    toEmail: process.env.VITE_EMAIL_TO || 'hello@exioraa.com',
  };
};