
const seedClients = [

  {
    name: "Bugs Bunny",
    age: 25,
  },
  {
    name: "Daffy Duck",
    age: 28,
  },
  {
    name: "Elmer Fudd",
    age: 44,
    deceased: true
  }

];// seedClients


require('dotenv').config();
const mongoose = require('mongoose');
const Client = require('./Client.js');


mongoose.connect(process.env.CLIENTDB_URL);

mongoose.connection.on('open', () => {
  
  console.log('DataBase connected....');
  populateClients();

})// mongoose.connection


async function populateClients(){

  const deletedClients = await Client.deleteMany();
  console.log('Deleted Client List for seeding:', deletedClients);

  try {

    const createdClients = await Client.create( seedClients );
    console.log('Created Client List:', createdClients);

    process.exit(0);

  } catch(err){
    console.log('There was an error creating Clients...', err.message);
  }

  process.exit(0);

}// populateClients()
