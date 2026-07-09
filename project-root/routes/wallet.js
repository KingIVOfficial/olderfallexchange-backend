import express from "express";
import walletInventory from "./walletInventory.js";

const router = express.Router();

// Mount inventory route
router.use("/inventory", walletInventory);

export default router;
