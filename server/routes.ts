import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendFormEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, subject, message } = req.body;

      // Basic validation
      if (!email || !firstName || !lastName || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "Missing required fields: firstName, lastName, email, message" 
        });
      }

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
        res.json({ success: true, message: "Contact form submitted successfully" });
      } else {
        res.status(500).json({ success: false, error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Quote form submission
  app.post("/api/quote", async (req, res) => {
    try {
      const formData = req.body;

      // Basic validation
      if (!formData.email || !formData.firstName || !formData.lastName) {
        return res.status(400).json({ 
          success: false, 
          error: "Missing required fields: firstName, lastName, email" 
        });
      }

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
        res.json({ success: true, message: "Quote request submitted successfully" });
      } else {
        res.status(500).json({ success: false, error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Quote form error:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
