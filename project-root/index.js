import express from "express";
import cors from "cors";

// ROUTES
import tradingPostRoutes from "./routes/tradingpost.js";
import sellingMarketRoutes from "./routes/sellingmarket.js";
import walletRoutes from "./routes/wallet.js";
import fallenRoutes from "./routes/fallen.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route mounting
app.use("/tradingpost", tradingPostRoutes);
app.use("/sellingmarket", sellingMarketRoutes);
app.use("/wallet", walletRoutes);
app.use("/fallen", fallenRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ ok: true, message: "Olderfall Exchange Backend Running" });
});

// Railway port binding
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
