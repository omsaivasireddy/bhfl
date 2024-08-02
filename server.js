const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow requests from other origins
app.use(express.json()); // Parse JSON bodies

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: "om_sai_vasireddy_22042004",
            email: "omsaivasireddy@gmail.com",
            roll_number: "AP21110011282",
            numbers: [],
            alphabets: [],
            highest_alphabet: []
        });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find the highest alphabet
    const highestAlphabet = alphabets.length
        ? [alphabets.reduce((a, b) => a > b ? a : b)]
        : [];

    // Response
    res.json({
        is_success: true,
        user_id: "om_sai_vasireddy_22042004",
        email: "omsaivasireddy@gmail.com",
        roll_number: "AP21110011282",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
