import express from "express";
import { sequence } from "../services/sequenceWallet.js";  // uses your existing Sequence config

const router = express.Router();

/**
 * GET /wallet/inventory/:address
 * Returns all items (Fallens, Armor, Weapons, Boosters) for a wallet across all networks.
 */
router.get("/inventory/:address", async (req, res) => {
  const address = req.params.address;

  if (!address) {
    return res.status(400).json({ error: "Wallet address is required." });
  }

  try {
    // 1. Fetch inventory from Sequence
    const inventory = await sequence.getInventory(address);

    // 2. Normalize items
    const items = inventory.items.map((item) => ({
      contractAddress: item.contractAddress,
      tokenId: item.tokenId,
      network: item.chainId,
      name: item.name || "Unknown Item",
      image: item.image || null,
      type: item.type || "unknown",
      metadata: item.metadata || {},
    }));

    // 3. Return clean inventory
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
