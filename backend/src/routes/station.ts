import { Router } from "express";
import { IStation } from "../types/station";
import { pool } from "../utils/config";
import { validateStationQueryParams } from "../utils/helpers";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { offset, limit } = validateStationQueryParams(req.query);
    const { rows } = await pool.query<IStation>("SELECT * FROM station OFFSET $1 LIMIT $2", [
      offset,
      limit
    ]);
    const countResult = await pool.query<{ count: number }>(
      "SELECT COUNT(*) AS count FROM station"
    );

    res.json({ rows, totalRowCount: Number(countResult.rows[0].count) });
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
