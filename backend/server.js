const express = require('express');
const app = express();
const PORT = process.env.PORT || 3337 ;
const DEFAULT_PATH = '/clients';
const cors = require('cors');
const dotenv = require('dotenv'); //

dotenv.config(); //or require('dotenv').config()


app.listen( PORT, () => {
  console.log(`Web server listening on http://localhost:${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

const mongoose = require('mongoose');
const Client = require('./models/Client.js');

mongoose.connect(process.env.CLIENTDB_URL);



//*CREATE:
//*2.
app.post('/clients/add', async (req, res) => {

  try {

    console.log('the req.body.name:', req.body.name);
    console.log('the req.body.age:', req.body.age);


    const createdClient = await Client.create( {
      name: req.body.name,
      age: req.body.age
    });

    res.json(createdClient);

  } catch(err) {
    res.status(422).json({error: err.message})
    console.log('There was an error...unable to create', err.message);
  }

});// CREATE



//*READ:
app.get('/', (req, res) => {
  res.redirect(DEFAULT_PATH);
});


app.get('/clients', async (req, res) => {

  const allClients = await Client.find().select('name age'); 
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
app.delete('/clients/:id', async (req, res) => {

  try {
    const {id} = req.params;
    const client = await Client.findByIdAndDelete(id);
    if(!client){
      return res.status(404).json({error: `Cannot find client with ID: ${id}`});
    } 
    res.status(200).json(client);
    
  } catch(err) {
    console.log('There was an error deleting...', err.message);
    res.status(422).json({err: err.message})
  }

});// DELETE












