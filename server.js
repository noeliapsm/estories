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

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Aquí deberías agregar la lógica para crear una nueva cuenta de usuario en tu base de datos
    // Por ejemplo, puedes usar Mongoose para interactuar con tu base de datos MongoDB
    // Este es solo un ejemplo básico, asegúrate de implementar medidas de seguridad adecuadas
    // como el cifrado de contraseñas antes de almacenarlas en la base de datos

    console.log(`New user registered: ${username}`);
    res.sendStatus(200);
});

