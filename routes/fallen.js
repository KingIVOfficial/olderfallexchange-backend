import express from 'express'
import { createClient } from '@supabase/supabase-js'

const router = express.Router()

// Supabase client — REPLACE THESE TWO VALUES
const supabase = createClient(
  'https://YOUR_PROJECT_ID.supabase.co',
  'YOUR_SERVICE_ROLE_KEY'
)

// Auto-insert Fallen from Sequence metadata
router.post('/list', async (req, res) => {
  try {
    const {
      tokenId,
      image,
      attributes,
      ownerWallet
    } = req.body

    // Extract fields from attributes
    let race = null
    let gender = null
    let level = null
    let ranged = false
    let light = false
    let heavy = false

    for (const attr of attributes || []) {
      if (attr.trait_type === 'Race') race = attr.value
      if (attr.trait_type === 'Gender') gender = attr.value
      if (attr.trait_type === 'Level') level = Number(attr.value)

      if (attr.trait_type === 'Affinity') {
        if (attr.value === 'Ranged') ranged = true
        if (attr.value === 'Light') light = true
        if (attr.value === 'Heavy') heavy = true
      }
    }

    // Basic validation
    if (!race || !gender || !level || !tokenId || !ownerWallet) {
      return res.status(400).json({ error: 'Missing required Fallen fields' })
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('fallens')
      .insert({
        race,
        gender,
        level,
        token_id: tokenId,
        owner_wallet: ownerWallet,
        image_url: image,
        ranged_affinity: ranged,
        light_affinity: light,
        heavy_affinity: heavy
      })
      .select()
      .single()

    if (error) {
      console.error(error)
      return res.status(500).json({ error: 'Failed to insert Fallen' })
    }

    return res.json({ fallen: data })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Unexpected error' })
  }
})

export default router
