import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Use NEON_DATABASE_URL if available, otherwise fall back to DATABASE_URL
const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "No database connection string found. Please set NEON_DATABASE_URL or DATABASE_URL.",
  );
}

export const pool = new Pool({ connectionString });
export const db = drizzle(pool, { schema });

export async function migrate() {
  console.log("Pushing schema to database...");
  try {
    // Create tables if they don't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        phone TEXT,
        project_type TEXT,
        budget TEXT,
        message TEXT NOT NULL,
        how_did_you_hear TEXT,
        created_at TEXT NOT NULL DEFAULT NOW()
      );
    `);
    console.log("Schema pushed successfully!");
  } catch (error) {
    console.error("Error pushing schema:", error);
    throw error;
  }
}