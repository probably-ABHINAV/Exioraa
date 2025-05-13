import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const parsedData = insertContactSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: parsedData.error.format() 
        });
      }
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(parsedData.data);
      
      // In a real application, you might want to send an email notification here
      // using a service like Nodemailer
      
      return res.status(201).json({ 
        message: "Message received successfully",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Server error processing your message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
