//requirement set up
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
//const notes = require('/public/notes.html')
const PORT = process.env.PORT || 3001;
//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.get('/api/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(savedNotes[Number(req.params.id)]);
});

app.post('/api.notes', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('db'));
    let newNote = req.body;
    let notesID = (savedNotes.length).toString();
    newNote.id = notesID;
    savedNotes.push(newNote);

    fs.writeSync('./db/db.json. Content: ', newNote);
});

//clear notes 
// app.delete('/api/notes/:id', (req, res) => {
//     const savednotes = JSON.parse(fs.writeFileSync('db'));
//     const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id)
//     fs.writeFileSync('db', JSON.stringify(notes));
//     res.json(delNote);
// });

//hook over index.html home and notes - work in progress for later
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// function update() {
//     fs.writeFile('./db/db.json', JSON.stringify(notes,''), err => {
//         if (err) throw err;
//         return true;
//     });
//}

app.listen(PORT, () => console.log(`Notes app listening on PORT : ${PORT}`));