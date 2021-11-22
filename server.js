//dependencies set up
const express = require('express');
const path = require('path');
const fs = require('fs');
const noteRouter = require('./routes/noteRouter.js');

const PORT = process.env.PORT || 3000;
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api/notes', noteRouter);
//server static files



//get routes and db connection
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
//moving api routes to separate folder
// app.get("/api/notes", function(req, res){
//     fs.readFile('./db/db.json', 'utf8', function(err, data){
//         if(err){
//             console.log(err)
//             return
//         }
//         res.send(data)
//     });
// });


app.listen(PORT, () => console.log(`Notes app listening on PORT : ${PORT}`));