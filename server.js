let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
app.get('/bhfl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});
app.post('/bhfl', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";
    const numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });
    const highest_alphabet = alphabets.length ? [alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b))] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});
app.listen(port, () => {
    console.log('Server is running on port ', port);
});