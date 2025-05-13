import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result.length > 0 ? result[0] : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    try {
      const contactData = {
        name: message.name,
        email: message.email,
        company: message.company || null,
        phone: message.phone || null,
        projectType: message.projectType || null,
        budget: message.budget || null,
        message: message.message,
        howDidYouHear: message.howDidYouHear || null,
        createdAt: new Date().toISOString()
      };
      
      const result = await db.insert(contactMessages).values(contactData).returning();
      console.log('Contact message created in database:', result[0]);
      return result[0];
    } catch (error) {
      console.error('Error creating contact message:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();
