import { SEQUENCE_API_URL, SEQUENCE_API_KEY } from "../config/sequence.js";

async function callSequence(path, body) {
  const res = await fetch(`${SEQUENCE_API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${SEQUENCE_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sequence API error: ${res.status} ${text}`);
  }

  return res.json();
}

export async function getWalletItems(walletAddress) {
  return callSequence("/wallet/items", { walletAddress });
}

export async function getItemDetails(itemId) {
  return callSequence("/items/details", { itemId });
}

export async function transferItem(fromWallet, toWallet, itemId) {
  return callSequence("/items/transfer", { fromWallet, toWallet, itemId });
}
