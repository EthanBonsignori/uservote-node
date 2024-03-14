import { Router } from "express";
import { query } from "../db";

const router = new Router();

router.get("/", async (req, res) => {
  const { rows } = await query("SELECT * FROM feature_requests");
  res.send(rows);
});

export default router;
