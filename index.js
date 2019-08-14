/*jshint esversion: 6*/

const express = require('express');
const bodyParser = require('body-parser');
const port = 8081;
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.static("dist"));
app.get('/', (req, res) => {
  console.log('Here at the root');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at port ${port} \n`);
});



