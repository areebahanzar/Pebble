const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/goals', (req, res) => {
    const { goal } = req.body;
    // Save the goal to a database here if needed
    console.log('Received goal:', goal);
    res.json({ message: 'Goal received!', goal });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));