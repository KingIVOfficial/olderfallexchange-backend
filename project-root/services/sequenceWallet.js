// services/sequenceWallet.js

// Your Sequence project keys
const projectAccessKey = "AQAAAAAAAMH-kjMj01b41F7jw52Cht0_ZUc";
// Paste your Admin API Secret Key JWT here, locally in your editor.
// Do NOT paste it into chat again.
const projectSecretKey = "// services/sequenceWallet.js

// Your Sequence project keys
const projectAccessKey = "AQAAAAAAAMH-kjMj01b41F7jw52Cht0_ZUc";
// Paste your Admin API Secret Key JWT here, locally in your editor.
// Do NOT paste it into chat again.
const projectSecretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHgzNzVlOTU4MmVmZDJkZDlkOWExYjMzNzQ2Zjg5YjlhMDA3YWUzYTBiIiwiaWF0IjoxNzgzNTU4OTkzLCJwcm9qZWN0Ijo0OTY2Mn0.1vZoj2CWHnUHbar3jUmJFj94_vP23dtOC5OPRohhPac";

// For now, a simple client so your route works and returns valid JSON.
// Later, we can wire this up to the real Sequence APIs.
export const sequenceClient = {
  async getInventory(address) {
    // You can replace this with real Sequence inventory logic once ready.
    return {
      items: [],
      projectAccessKey,
      // Never expose projectSecretKey in responses — keep it backend-only.
    };
  }
};
";

// For now, a simple client so your route works and returns valid JSON.
// Later, we can wire this up to the real Sequence APIs.
export const sequenceClient = {
  async getInventory(address) {
    // You can replace this with real Sequence inventory logic once ready.
    return {
      items: [],
      projectAccessKey,
      // Never expose projectSecretKey in responses — keep it backend-only.
    };
  }
};
