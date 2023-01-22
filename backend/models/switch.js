const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SwitchSchema = new Schema({
  on: {
    type: Number,
    required: true,
  },
});

const Switch = mongoose.model('Switch', SwitchSchema);
module.exports = Switch;
