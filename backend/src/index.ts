import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
