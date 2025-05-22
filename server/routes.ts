import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Email form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // In a real implementation, you would:
      // 1. Send email using a service like Nodemailer/SendGrid/etc.
      // 2. Store contact submission in database
      // 3. Send notification to admin
      
      console.log('Contact form submission:', validatedData);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return success response
      res.json({ 
        success: true, 
        message: 'Your message has been sent successfully. We will contact you soon!' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        // Return generic error
        res.status(500).json({ 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        });
      }
    }
  });

  // Subscriber endpoint (newsletter signup)
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ 
          success: false, 
          message: 'Email is required' 
        });
      }
      
      // Validate email format
      if (!z.string().email().safeParse(email).success) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address' 
        });
      }
      
      // In a real implementation, you would:
      // 1. Add email to newsletter service (Mailchimp, etc.)
      // 2. Store subscription in database
      
      console.log('Newsletter subscription:', email);
      
      // Return success response
      res.json({ 
        success: true, 
        message: 'Thank you for subscribing!' 
      });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to subscribe. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
