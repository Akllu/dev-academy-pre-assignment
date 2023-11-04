import { NextFunction, Request, Response } from "express";
import logger from "./logger";

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  logger.info("Method: ", req.method);
  logger.info("Path: ", req.path);
  logger.info("Body: ", req.body);
  logger.info("-----");
  next();
};

const unknownEndpoint = (_req: Request, res: Response) => {
  logger.error("Unknown endpoint");
  res.status(404).send({ error: "Unknown endpoint" });
};

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err);
  return res.status(400).json({ error: err.message });
};

export default {
  requestLogger,
  unknownEndpoint,
  errorHandler
};
