const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/estories', { useNewUrlParser: true, useUnifiedTopology: true });

const phraseSchema = new mongoose.Schema({
    text: String,
    timestamp: { type: Date, default: Date.now }
});

const Phrase = mongoose.model('Phrase', phraseSchema);

// Routes
app.get('/phrases', async (req, res) => {
    const phrases = await Phrase.find().sort({ timestamp: 1 });
    res.json(phrases);
});

app.post('/phrases', async (req, res) => {
    const { text } = req.body;
    const newPhrase = new Phrase({ text });
    await newPhrase.save();
    res.json(newPhrase);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
