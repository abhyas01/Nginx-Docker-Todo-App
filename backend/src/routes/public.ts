import express from "express";
import type { Request, Response, Router } from "express";
import { dbPing } from "../db/pool.js";

const publicRouter: Router = express.Router();

publicRouter.get("/health", async (req: Request, res: Response) => {
  try {
    await dbPing();
    res.status(200).json({ ok: true });
  } catch {
    res.status(503).json({ ok: false });
  }
});

export default publicRouter;
