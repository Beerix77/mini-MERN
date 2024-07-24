
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333 ;
require('dotenv').config();


app.listen( PORT, () => {
  console.log(`Web server listening on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

const mongoose = require('mongoose');
const Client = require('./models/Client.js');

mongoose.connect(process.env.CLIENTDB_URL);


//*CREATE

//*READ
app.get('/clients', async (req, res) => {

  const allClients = await Client.find().select('name');
  //console.log('All clients (by name):', allClients);
  res.json(allClients);

});


app.get('/clients/:id', async(req, res) => {

  


})












//*UPDATE
//*DELETE













