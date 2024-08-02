const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST endpoint to handle the data
app.post('/bfhl', (req, res) => {
    let requestData;

    // Try to parse the input JSON
    try {
        requestData = JSON.parse(JSON.stringify(req.body));
    } catch (error) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid JSON format'
        });
    }

    const { data } = requestData;

    // Check if 'data' is an array
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input format, "data" should be an array'
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet: alphabets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).slice(-1)
    });
});

// GET endpoint to return the operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
