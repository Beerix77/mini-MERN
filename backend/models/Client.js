
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
