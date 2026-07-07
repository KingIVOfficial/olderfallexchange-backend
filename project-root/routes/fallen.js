import express from 'express';
import { getWalletItems } from '../services/sequenceWallet.js';

const router = express.Router();

router.get('/debug/wallet/:walletAddress', async (req, res) => {
  const { walletAddress } = req.params;

  try {
    const items = await getWalletItems(walletAddress);

    res.json({
      wallet: walletAddress,
      items
    });
  } catch (error) {
    console.error('Error in debug wallet route:', error);
    res.status(500).json({ error: 'Failed to fetch wallet items' });
  }
});

export default router;
