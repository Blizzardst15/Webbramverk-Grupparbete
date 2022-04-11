const mongoose = require('mongoose');

const SkolSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  teacha: {
    type: String,
    required: [true, 'Please add a lärare']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skola', SkolSchema);