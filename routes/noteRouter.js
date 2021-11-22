const noteRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  //writeToFile,
} = require('../utils/utilShare');

noteRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

noteRouter.get('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json').then((data) => {
        const note = JSON.parse(data).find((note) => note.id === noteId);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    });
});

noteRouter.post('/', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        id: uuidv4(),
        title,
        text,
    };
    readAndAppend('./db/db.json', newNote).then(() => {
        res.json(newNote);
    });
});

// noteRouter.delete('/:id', (req, res) => {
//     const noteId = req.params.id;
//     readFromFile('./db/db.json').then((data) => {
//         const notes = JSON.parse(data);
//         const newNotes = notes.filter((note) => note.id !== noteId);
//         writeToFile('./db/db.json', newNotes).then(() => {
//             res.json({ message: 'Note deleted' });
//         });
//     });
// });

module.exports = noteRouter;