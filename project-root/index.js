import express from "express";
import cors from "cors";

// Correct route import
import walletInventoryRoutes from "./routes/walletInventory.js";

const app = express();
app.use(cors());
app.use(express.json());

// Mount your wallet inventory route
app.use("/wallet/inventory", walletInventoryRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Olderfall Exchange Backend Running" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
