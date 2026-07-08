import express from "express";
import cors from "cors";
import walletInventory from "./routes/walletInventory.js";

const app = express();

app.use(cors());
app.use(express.json());

// HEALTH CHECK
app.get("/", (req, res) => {
  res.json({ status: "Olderfall backend running" });
});

// WALLET ROUTES
app.use("/wallet", walletInventory);

// SERVER LISTEN (Render uses PORT env)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Olderfall backend running on port ${PORT}`);
});

export default app;
