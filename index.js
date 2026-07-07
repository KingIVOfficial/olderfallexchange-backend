import express from "express";
import cors from "cors";

import fallenRoutes from "./routes/fallen.js";
import tradingRoutes from "./routes/tradingpost.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/fallen", fallenRoutes);
app.use("/api/trading", tradingRoutes);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
