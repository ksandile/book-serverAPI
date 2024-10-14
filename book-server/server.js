const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'items.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize data file
const init = async () => {
    try {
        await fs.access(dataFile);
    } catch {
        await fs.writeFile(dataFile, JSON.stringify([]));
    }
};

// Read data from the file
const readData = async () => {
    const data = await fs.readFile(dataFile, 'utf8');
    return JSON.parse(data);
};

// Write data to the file
const writeData = async (data) => {
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
};

// Routes
app.get('/items', async (req, res) => {
    const items = await readData();
    res.json(items);
});

app.get('/items/:id', async (req, res) => {
    const items = await readData();
    const item = items.find(i => i.id === req.params.id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.post('/items', async (req, res) => {
    const newItem = req.body;
    const items = await readData();
    items.push(newItem);
    await writeData(items);
    res.status(201).json(newItem);
});

app.put('/items/:id', async (req, res) => {
    const items = await readData();
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if (itemIndex !== -1) {
        items[itemIndex] = { ...items[itemIndex], ...req.body };
        await writeData(items);
        res.json(items[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.delete('/items/:id', async (req, res) => {
    const items = await readData();
    const newItems = items.filter(item => item.id !== req.params.id);
    if (newItems.length !== items.length) {
        await writeData(newItems);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// Start server and initialize data file
init().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to initialize server:', err);
});

