import nodemailer from 'nodemailer';

interface EmailData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  formType: 'contact' | 'quote';
  formData?: any;
}

// Create reusable transporter object using Gmail SMTP
const createTransporter = () => {
  // Check if email credentials are available
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log('Email credentials not found in environment variables. Using development mode.');
    // Return a mock transporter for development
    return {
      sendMail: async (mailOptions: any) => {
        console.log('Development mode - Email would be sent with:', mailOptions);
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
    }
  });
};

const formatQuoteData = (data: any) => {
  return `
QUOTE REQUEST DETAILS:
======================

PERSONAL INFORMATION:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Preferred Contact: ${data.preferredContact?.join(', ') || 'Not specified'}

PROJECT DETAILS:
- Service Type: ${data.serviceType}
- Dimensions: ${data.length}" L x ${data.width}" W x ${data.height}" H
- Intended Use: ${data.intendedUse?.join(', ') || 'Not specified'}
- Siding Material: ${data.sidingMaterial?.join(', ') || 'Not specified'}
- Window Type: ${data.windowType}
- Number of Windows: ${data.numberOfWindows}
- Window Size: ${data.windowSize}
- Door Type: ${data.doorType}
- Shelving: ${data.shelving?.join(', ') || 'Not specified'}
- Work Bench: ${data.workbench?.join(', ') || 'Not specified'}
- Preferred Installation Date: ${data.preferredInstallationDate || 'Not specified'}
- Budget: ${data.budget || 'Not specified'}

ADDITIONAL INFORMATION:
- How did you hear about us: ${data.howDidYouHear}
- Workshop Use: ${data.workshopUse}
- Other Use: ${data.otherUse}
  `.trim();
};

const formatContactData = (data: any) => {
  return `
CONTACT FORM SUBMISSION:
========================

PERSONAL INFORMATION:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Subject: ${data.subject}

MESSAGE:
${data.message}
  `.trim();
};

export const sendFormEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const isQuote = emailData.formType === 'quote';
    const subject = isQuote 
      ? `New Quote Request from ${emailData.firstName} ${emailData.lastName}`
      : `New Contact Form: ${emailData.subject || 'General Inquiry'}`;
    
    const emailBody = isQuote 
      ? formatQuoteData(emailData.formData)
      : formatContactData(emailData.formData);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'instashedworks@gmail.com',
      subject: subject,
      text: emailBody,
      replyTo: emailData.email
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};