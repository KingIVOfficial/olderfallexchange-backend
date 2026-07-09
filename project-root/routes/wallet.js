import express from "express";
import walletInventory from "./walletInventory.js";

const router = express.Router();

// Mount the inventory route correctly
router.use("/inventory", walletInventory);

export default router;
