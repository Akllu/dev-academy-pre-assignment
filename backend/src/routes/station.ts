import { Router } from "express";
import { pool } from "../utils/config";
import { IStation } from "../types/station";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const { rows } = await pool.query<IStation>("SELECT * FROM station LIMIT 10");
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { rows } = await pool.query<IStation>("SELECT * FROM station WHERE id = $1", [id]);
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
});

export default router;
