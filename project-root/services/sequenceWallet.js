// services/sequenceWallet.js
import { Sequence } from "@0xsequence/sdk";

// Your updated Project Access Key (safe to include)
const projectAccessKey = "AQAAAAAAAMH-kjMj01b41F7jw52Cht0_ZUc";

// Your Admin API Secret Key — insert YOUR NEW ONE here (do NOT paste it in chat)
const projectSecretKey = "<YOUR_ADMIN_API_SECRET_KEY>";

const sequence = new Sequence({
  projectAccessKey,
  projectSecretKey
});

// Basic working inventory function so your route returns valid JSON
export const sequenceClient = {
  async getInventory(address) {
    try {
      const inventory = await sequence.getInventory(address);
      return inventory;
    } catch (err) {
      console.error("Sequence Inventory Error:", err);
      return { items: [] };
    }
  }
};
