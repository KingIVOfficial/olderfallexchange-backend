import express from 'express'
import fallenRoutes from './routes/fallen.js'
import tradingPostRoutes from './routes/tradingpost.js'

const app = express()

app.use(express.json())

// ROUTES
app.use('/api/fallen', fallenRoutes)
app.use('/api/tradingpost', tradingPostRoutes)

// HEALTH CHECK
app.get('/', (req, res) => {
  res.send('OlderfallExchange backend is running')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
