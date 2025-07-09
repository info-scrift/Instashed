import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendFormEmail } from "./email";
import { z } from "zod";

// Validation schemas
const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().max(100, "Subject too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
  zipCode: z.string().optional(),
  serviceType: z.string().optional(),
});

const QuoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  preferredContact: z.array(z.string()).optional(),
  serviceType: z.string().optional(),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  intendedUse: z.array(z.string()).optional(),
  sidingMaterial: z.array(z.string()).optional(),
  windowType: z.string().optional(),
  doorType: z.string().optional(),
  shelving: z.array(z.string()).optional(),
  workbench: z.array(z.string()).optional(),
  preferredInstallationDate: z.string().optional(),
  budget: z.string().optional(),
  howDidYouHear: z.string().optional(),
  workshopUse: z.string().optional(),
  otherUse: z.string().optional(),
  numberOfWindows: z.string().optional(),
  windowSize: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validationResult = ContactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          success: false, 
          error: "Validation failed",
          details: validationResult.error.errors
        });
      }

      const { firstName, lastName, email, phone, subject, message } = validationResult.data;

      // Send email
      const emailSent = await sendFormEmail({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        formType: 'contact',
        formData: { firstName, lastName, email, phone, subject, message }
      });

      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Contact form submitted successfully. We'll get back to you within 24 hours." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to send email. Please try again later." 
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error("Contact form error:", {
        error: errorMessage,
        body: req.body,
        timestamp: new Date().toISOString()
      });
      
      res.status(500).json({ 
        success: false, 
        error: process.env.NODE_ENV === 'production' 
          ? "Internal server error" 
          : errorMessage
      });
    }
  });

  // Quote form submission
  app.post("/api/quote", async (req, res) => {
    try {
      // Validate request body
      const validationResult = QuoteFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          success: false, 
          error: "Validation failed",
          details: validationResult.error.errors
        });
      }

      const formData = validationResult.data;

      // Send email
      const emailSent = await sendFormEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        formType: 'quote',
        formData: formData
      });

      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Quote request submitted successfully. We'll contact you within 24 hours to discuss your project." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to send email. Please try again later." 
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error("Quote form error:", {
        error: errorMessage,
        body: req.body,
        timestamp: new Date().toISOString()
      });
      
      res.status(500).json({ 
        success: false, 
        error: process.env.NODE_ENV === 'production' 
          ? "Internal server error" 
          : errorMessage
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
