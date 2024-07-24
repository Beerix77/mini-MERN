
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    },
    deceased: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);// ClientSchema


const model = mongoose.model('Client', ClientSchema);
module.exports = model;

/*
If your .env file is in /backend/.env and you are running your script from /backend/models/seed.js, the dotenv package will not automatically find it because it looks for the .env file in the directory where the script is executed or the project root.
*/