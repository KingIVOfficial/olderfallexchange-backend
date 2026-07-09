// services/sequenceWallet.js

// Your Sequence project keys
const projectAccessKey = "AQAAAAAAAMH-kjMj01b41F7jw52Cht0_ZUc";

// Your Admin API Secret Key JWT — this should be ONLY the token string
// (paste it locally, not in chat)
const projectSecretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHgzNzVlOTU4MmVmZDJkZDlkOWExYjMzNzQ2Zjg5YjlhMDA3YWUzYTBiIiwiaWF0IjoxNzgzNTU4OTkzLCJwcm9qZWN0Ijo0OTY2Mn0.1vZoj2CWHnUHbar3jUmJFj94_vP23dtOC5OPRohhPac";

// For now, a simple client so your route works and returns valid JSON.
export const sequenceClient = {
  async getInventory(address) {
    return {
      items: [],
      projectAccessKey,
      // Never expose projectSecretKey in responses — keep it backend-only.
    };
  }
};
