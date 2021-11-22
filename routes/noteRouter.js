const noteRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../utils/utilShare');

noteRouter.get("/", (req, res) => {
  readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)));
});

noteRouter.post('/', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
  } else {
    res.json('Error in posting a new note');
  }
});


noteRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));

  const noteIndex = notes.findIndex(note => note.note_id === id);

  notes.splice(noteIndex, 1);

  writeToFile('./db/db.json', notes);
  return res.json(notes);
});

module.exports = noteRouter;