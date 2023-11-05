import cors from "cors";
import express from "express";
import stationRouter from "./routes/station";
import middleware from "./utils/middleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger);

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.use("/api/stations", stationRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
