import { SequenceIndexer } from '@0xsequence/indexer'

const indexer = new SequenceIndexer('https://polygon-indexer.sequence.app')

export async function getWalletItems(walletAddress) {
  try {
    const response = await indexer.getTokenBalances({
      accountAddress: walletAddress,
      includeMetadata: true
    })

    return response.balances || []
  } catch (err) {
    console.error('Sequence API error:', err)
    throw new Error('Failed to fetch wallet items')
  }
}
