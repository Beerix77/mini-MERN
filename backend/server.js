
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


//*CREATE
app.post('/clients/new', (req, res) => {

  //*USE REACT FRONTEND <FORM>
    

});


app.post('/clients', async (req, res) => {

  try {

    const createdClient = await Client.create( {name: req.body.name} );
    res.json(createdClient);

  } catch(err) {

    res.status(422).json({error: err.message})
    console.log('There was an error...', err.message);

  }

});







//*READ
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













