import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

// Email validation schemas
const ContactEmailSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  formType: z.literal('contact'),
  formData: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    subject: z.string().optional(),
    message: z.string()
  })
});

const QuoteEmailSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  formType: z.literal('quote'),
  formData: z.record(z.any())
});

type EmailData = z.infer<typeof ContactEmailSchema> | z.infer<typeof QuoteEmailSchema>;

// Create reusable transporter object using Gmail SMTP
const createTransporter = () => {
  // Check if email credentials are available
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Email credentials not configured for production');
    }
    
    // Return a mock transporter for development
    return {
      sendMail: async (mailOptions: any) => {
        console.log('Development mode - Email would be sent with:', {
          to: mailOptions.to,
          subject: mailOptions.subject,
          from: mailOptions.from
        });
        return { success: true };
      }
    };
  }
  
  // Real email transport when credentials are available
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 14 // 14 messages per second
  });
};

const formatQuoteData = (data: any) => {
  return `
QUOTE REQUEST DETAILS:
======================

PERSONAL INFORMATION:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Preferred Contact: ${data.preferredContact?.join(', ') || 'Not specified'}

PROJECT DETAILS:
- Service Type: ${data.serviceType || 'Not specified'}
- Dimensions: ${data.length || 'N/A'}" L x ${data.width || 'N/A'}" W x ${data.height || 'N/A'}" H
- Intended Use: ${data.intendedUse?.join(', ') || 'Not specified'}
- Siding Material: ${data.sidingMaterial?.join(', ') || 'Not specified'}
- Window Type: ${data.windowType || 'Not specified'}
- Number of Windows: ${data.numberOfWindows || 'Not specified'}
- Window Size: ${data.windowSize || 'Not specified'}
- Door Type: ${data.doorType || 'Not specified'}
- Shelving: ${data.shelving?.join(', ') || 'Not specified'}
- Work Bench: ${data.workbench?.join(', ') || 'Not specified'}
- Preferred Installation Date: ${data.preferredInstallationDate || 'Not specified'}
- Budget: ${data.budget || 'Not specified'}

ADDITIONAL INFORMATION:
- How did you hear about us: ${data.howDidYouHear || 'Not specified'}
- Workshop Use: ${data.workshopUse || 'Not specified'}
- Other Use: ${data.otherUse || 'Not specified'}

SUBMITTED AT: ${new Date().toISOString()}
  `.trim();
};

const formatContactData = (data: any) => {
  return `
CONTACT FORM SUBMISSION:
========================

PERSONAL INFORMATION:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- Subject: ${data.subject || 'General Inquiry'}

MESSAGE:
${data.message}

SUBMITTED AT: ${new Date().toISOString()}
  `.trim();
};

export const sendFormEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Validate email data
    const validationResult = emailData.formType === 'contact' 
      ? ContactEmailSchema.safeParse(emailData)
      : QuoteEmailSchema.safeParse(emailData);

    if (!validationResult.success) {
      console.error('Email validation failed:', validationResult.error);
      return false;
    }

    const transporter = createTransporter();
    
    const isQuote = emailData.formType === 'quote';
    const subject = isQuote 
      ? `New Quote Request from ${emailData.firstName} ${emailData.lastName}`
      : `New Contact Form: ${emailData.subject || 'General Inquiry'}`;
    
    const emailBody = isQuote 
      ? formatQuoteData(emailData.formData)
      : formatContactData(emailData.formData);

    const mailOptions = {
      from: process.env.GMAIL_USER || 'noreply@instashed.com',
      to: process.env.ADMIN_EMAIL || 'munirabbasi2001@gmail.com',
      subject: subject,
      text: emailBody,
      replyTo: emailData.email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    const result = await transporter.sendMail(mailOptions);
    
    if (process.env.NODE_ENV === 'production') {
      console.log('Email sent successfully to:', mailOptions.to);
    } else {
      console.log('Email sent successfully (dev mode)');
    }
    
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', {
      error: errorMessage,
      formType: emailData.formType,
      email: emailData.email,
      timestamp: new Date().toISOString()
    });
    return false;
  }
};