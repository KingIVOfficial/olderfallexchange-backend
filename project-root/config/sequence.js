import { SequenceAPIClient } from '@0xsequence/api'

export const sequence = new SequenceAPIClient({
  projectAccessKey: process.env.SEQUENCE_PROJECT_ACCESS_KEY,
  projectId: process.env.SEQUENCE_PROJECT_ID
})
