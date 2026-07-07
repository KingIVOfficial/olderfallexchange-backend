import express from 'express';
import fallenRoutes from './routes/fallen.js';
import tradingPostRoutes from './routes/tradingpost.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/fallen', fallenRoutes);
app.use('/api/tradingpost', tradingPostRoutes);

app.get('/', (req, res) => {
  res.send('OlderfallExchange backend is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
