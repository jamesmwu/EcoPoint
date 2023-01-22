const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadingsSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Reading = mongoose.model('Reading', ReadingsSchema);
module.exports = Reading;
