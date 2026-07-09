import express from "express";
import cors from "cors";
import walletRoutes from "./routes/wallet.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ ok: true, message: "Olderfall Exchange Backend Running" });
});

// Wallet routes
app.use("/wallet", walletRoutes);

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Olderfall Exchange Backend running on port ${PORT}`);
});
