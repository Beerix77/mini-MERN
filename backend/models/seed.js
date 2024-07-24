
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

const mongoose = require('mongoose');
const Client = require('./Client.js');

mongoose.connect('mongodb+srv://andrewmatysiak:XAAi5Q1MWrK817QX@andrew-database.6rzqzap.mongodb.net/clientDB?retryWrites=true&w=majority&appName=andrew-database')
