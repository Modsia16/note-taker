//requirement set up
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.envPORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Notes app listening on PORT : ${PORT}`));