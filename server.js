//dependencies set up
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const noteRouter = require('./routes/noteRouter');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/notes', noteRouter);
//server static files
app.use(express.static('public'));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//get routes and db connection
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
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