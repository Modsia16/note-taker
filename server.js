//dependencies set up
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
//incriment notes
let noteMaker = 0

const PORT = process.env.PORT || 3002;
//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//server static files
app.use(express.static('public'));

//get routes and db connection
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/notes", function(req, res){
    fs.readFile('db/db.json', 'utf8', function(err, data){
        if(err){
            console.log(err)
            return
        }
        res.json(JSON.parse(data))
    })
})

//post new notes
app.post("/api/notes", function(req, res){
    const newNote = req.body;
    let updatedNotesSf = "";
    noteMaker++
    newNote.id = noteMaker
    fs.readFile('db/db.json', 'utf8', function(err, data){
        if(err){
            console.log(err)
            return
        }
        const notes = JSON.parse(data)
        const allNotes = [...notes, newNote]
        updatedNotesSf = JSON.stringify(allNotes)
        fs.writeFile('db/db.json', updatedNotesSf, function(err){
            if(err){
                console.log(err)
                return
            }
            res.send(allNotes)
        })  
    })
})


//clear notes 
app.delete('/api/notes/:id', (req, res) => 
{
    const noteDeleteId = parseInt(req.params.id)

    fs.readFile('db/db.json', 'utf8', function(err, data){
        if(err){
            console.log(err)
            return
        }
        const notes = JSON.parse(data)
        for(let i = 0; i < notes.length; i++){
            if(notes[i].id === noteDeleteId){
                notes.splice(i, 1)
                data = JSON.stringify(notes)
            }
        }
        // override the old file with the new file
        fs.writeFile('db/db.json', 'utf8', function(err){
            if(err){
                console.log(err)
                return
            }
            res.send('Deleted')
        })
    })
})

app.listen(PORT, () => console.log(`Notes app listening on PORT : ${PORT}`));