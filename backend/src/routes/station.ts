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
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
      throw new Error("Invalid id");
    }

    const { rows } = await pool.query<IStation>(
      `
    SELECT station.*,
    COUNT(*) AS total_journeys_started,
    (SELECT COUNT(*) FROM journey WHERE return_station_id = station.id) AS total_journeys_ended,
    AVG(journey.distance) AS average_distance,
    AVG(journey.duration) AS average_duration
    FROM station
    LEFT JOIN journey ON station.id = journey.departure_station_id
    WHERE station.id = $1
    GROUP BY station.id`,
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
});

export default router;
