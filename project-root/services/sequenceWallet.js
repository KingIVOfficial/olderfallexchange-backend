import sequenceClient from '../config/sequence.js';

export async function getWalletItems(walletAddress) {
  try {
    const response = await sequenceClient.getWalletTokens({
      walletAddress,
      includeMetadata: true
    });

    return response.tokens || [];
  } catch (error) {
    console.error('Error fetching wallet items from Sequence:', error);
    throw new Error('Failed to fetch wallet items');
  }
}
