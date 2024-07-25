const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3334 ;
const DEFAULT_PATH = '/clients';
require('dotenv').config();


app.listen( PORT, () => {
  console.log(`Web server listening on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

const mongoose = require('mongoose');
const Client = require('./models/Client.js');

mongoose.connect(process.env.CLIENTDB_URL);





//*CREATE:
//*1. has to be a GET
app.get('/clients/add', async (req, res) => { 
  
  const inputName = req.query.name;
  const inputAge = req.query.age;

  console.log('Received "name" data to server from UI:', inputName);
  console.log('Received "age" data to server from UI:', inputAge);

  try {
    const response = await axios.post(`http://localhost:${PORT}/clients`, {
      name: inputName,
      age: inputAge
    })

    res.send('Client added: ' + JSON.stringify(response.data));

  } catch (error) {
    res.status(500).send('Error adding client: ' + error.message);
  }
});





//*2.
app.post('/clients', async (req, res) => {

  try {

    const createdClient = await Client.create( {
      name: req.body.name,
      age: req.body.age
    });

    res.json(createdClient);

  } catch(err) {
    res.status(422).json({error: err.message})
    console.log('There was an error...', err.message);
  }

});







//*READ:
app.get('/', (req, res) => {
  res.redirect(DEFAULT_PATH);
});


app.get('/clients', async (req, res) => {

  const allClients = await Client.find().select('name');
  //console.log('All clients (by name):', allClients);
  res.json(allClients);

});


app.get('/clients/:id', async(req, res) => {

  try {
    const clientSelect = await Client.findOne( {_id: req.params.id} );

    if(clientSelect === null){
      res.sendStatus(404);
    } else {
      res.json( clientSelect );
    }

  } catch(err) {
    res.status(404).json( {error: err.message} );
    console.log('There was an error loading client by ID...', err.message);
  }

})// READ





//*UPDATE
//*DELETE
app.get('/clients/:id/delete', async (req, res) => {

  try {
    
  } catch(err) {
    console.log('There was an error...', err.message);
    res.status(422).json({err: message})
  }

});












