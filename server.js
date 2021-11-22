//dependencies set up
const express = require('express');
const path = require('path');
const router = require('./routes/noteRouter');


const PORT = process.env.PORT || 3002;
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/notes', router);
//server static files
app.use(express.static('public'));

//homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//get notes page
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