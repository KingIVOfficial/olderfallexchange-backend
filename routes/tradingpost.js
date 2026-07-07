import express from 'express'
import { createClient } from '@supabase/supabase-js'

const router = express.Router()

const supabase = createClient(
  'https://qyumplqtxdbidwrypmcn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5dW1wbHF0eGRiaWR3cnlwbWNuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzEwNDMxMCwiZXhwIjoyMDk4NjgwMzEwfQ.c9QaeMZxO0o8JipfBsjmOl474phEHY2WSSOMebsnNPw'
)

/* ---------------------------
   CREATE LISTING
---------------------------- */
router.post('/list', async (req, res) => {
  const { item_type, item_id, owner_wallet, seeking } = req.body

  if (!item_type || !item_id || !owner_wallet) {
    return res.status(400).json({ error: 'Missing listing fields' })
  }

  const { data, error } = await supabase
    .from('listings')
    .insert({
      item_type,
      item_id,
      owner_wallet,
      seeking: seeking || []
    })
    .select()
    .single()

  if (error) return res.status(500).json({ error })
  return res.json({ listing: data })
})

/* ---------------------------
   GET ALL ACTIVE LISTINGS
---------------------------- */
router.get('/listings', async (req, res) => {
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('status', 'active')

  if (error) return res.status(500).json({ error })
  return res.json({ listings: data })
})

/* ---------------------------
   MAKE AN OFFER
---------------------------- */
router.post('/offer', async (req, res) => {
  const { listing_id, offerer_wallet, offered_items } = req.body

  if (!listing_id || !offerer_wallet || !offered_items) {
    return res.status(400).json({ error: 'Missing offer fields' })
  }

  const { data, error } = await supabase
    .from('offers')
    .insert({
      listing_id,
      offerer_wallet,
      offered_items
    })
    .select()
    .single()

  if (error) return res.status(500).json({ error })
  return res.json({ offer: data })
})

/* ---------------------------
   ACCEPT OFFER
---------------------------- */
router.post('/accept', async (req, res) => {
  const { offer_id } = req.body

  if (!offer_id) return res.status(400).json({ error: 'Missing offer_id' })

  const { error } = await supabase
    .from('offers')
    .update({ status: 'accepted' })
    .eq('id', offer_id)

  if (error) return res.status(500).json({ error })
  return res.json({ success: true })
})

/* ---------------------------
   DECLINE OFFER
---------------------------- */
router.post('/decline', async (req, res) => {
  const { offer_id } = req.body

  if (!offer_id) return res.status(400).json({ error: 'Missing offer_id' })

  const { error } = await supabase
    .from('offers')
    .update({ status: 'declined' })
    .eq('id', offer_id)

  if (error) return res.status(500).json({ error })
  return res.json({ success: true })
})

/* ---------------------------
   CANCEL OFFER
---------------------------- */
router.post('/cancel', async (req, res) => {
  const { offer_id } = req.body

  if (!offer_id) return res.status(400).json({ error: 'Missing offer_id' })

  const { error } = await supabase
    .from('offers')
    .update({ status: 'cancelled' })
    .eq('id', offer_id)

  if (error) return res.status(500).json({ error })
  return res.json({ success: true })
})

export default router
