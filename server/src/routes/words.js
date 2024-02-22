// server/src/routes/words.js
const express = require('express');
const router = express.Router();
const Word = require('../models/word');

// Get all words
router.get('/', async (req, res) => {
  try {
    const words = await Word.find().sort({ createdAt: -1 });
    res.json(words);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new word
router.post('/', async (req, res) => {
  const word = new Word({
    word: req.body.word
  });

  try {
    const newWord = await word.save();
    res.status(201).json(newWord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
