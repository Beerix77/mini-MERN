
const express = require('express');
// const { Aggregate } = require('mongoose');
const app = express();
const PORT = 3333;


app.listen( PORT, () => {
  console.log(`Web server listening on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {

  console.log('home');
  res.send(`Welcome to webserver`)

});









