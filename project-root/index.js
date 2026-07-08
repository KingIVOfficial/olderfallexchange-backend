const express = require('express');
const app = express();

// ROUTES
const fallen = require('./routes/fallen.js');
const tradingpost = require('./routes/tradingpost.js');

// SERVICES
const wallet = require('./services/sequenceWallet.js');

// CONFIG
const sequence = require('./config/sequence.js');

// BASIC TEST ROUTE
app.get('/', (req, res) => {
  res.send('OK');
});

// START SERVER (Railway compatible)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
