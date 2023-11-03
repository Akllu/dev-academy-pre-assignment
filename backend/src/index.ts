import express from "express";
import cors from "cors";
import config from "./utils/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
