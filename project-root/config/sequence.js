import { SequenceClient } from '@0xsequence/sdk';

const sequenceClient = new SequenceClient({
  network: 'polygon',
  projectAccessKey: process.env.SEQUENCE_PROJECT_ACCESS_KEY,
  walletConnectProjectId: process.env.SEQUENCE_WALLET_CONNECT_PROJECT_ID
});

export default sequenceClient;
