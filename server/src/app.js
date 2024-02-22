// server/src/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const wordRoutes = require('./routes/words');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors());
app.use(express.json());
app.use('/api/words', wordRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
