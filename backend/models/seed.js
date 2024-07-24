
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
console.log('DataBase connected....');
process.exit(0);

