const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { title } = require('process');

// Get request to this routes end point 'api/notes'
router.get('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(db);
});

// Post request to this routes end point 'api/notes'
router.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), 'utf8');
    res.json(db);
});


module.exports = router;