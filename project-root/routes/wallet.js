import express from "express";
import { sequence } from "../services/sequenceWallet.js";

const router = express.Router();

/**
 * GET /wallet/inventory/:address
 * Returns all items for a wallet across all networks.
 */
router.get("/inventory/:address", async (req, res) => {
  const address = req.params.address;

  if (!address) {
    return res.status(400).json({ error: "Wallet address is required." });
  }

  try {
    const inventory = await sequence.getInventory(address);

    const items = inventory.items.map((item) => ({
      contractAddress: item.contractAddress,
      tokenId: item.tokenId,
      network: item.chainId,
      name: item.name || "Unknown Item",
      image: item.image || null,
      type: item.type || "unknown",
      metadata: item.metadata || {},
    }));

    return res.json({
      wallet: address,
      count: items.length,
      items,
    });

  } catch (error) {
    console.error("Inventory Error:", error);
    return res.status(500).json({
      error: "Failed to fetch wallet inventory.",
      details: error.message,
    });
  }
});

export default router;
