const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  firstname: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  pickuplocation: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  godate: {
    type: String,
    required: true
  },

  hour: {
    type: Number,
    required: true
  },

  minute: {
    type: Number,
    required: true
  },

},

  {
    timestamps: true
  });

  const Ride = mongoose.model('Ride', userSchema);

  module.exports = Ride;