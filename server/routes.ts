import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint to verify API is working
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
  });

  // Add CORS headers to allow connections from anywhere
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  const httpServer = createServer(app);

  return httpServer;
}
