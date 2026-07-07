import express from "express";
import cors from "cors";
import fallenRoutes from "./routes/fallen.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// Connect the Fallen route
app.use("/api/fallen", fallenRoutes);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
