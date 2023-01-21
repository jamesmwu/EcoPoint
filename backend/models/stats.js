const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  usage: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
  },
});

const Stat = mongoose.model('Stat', StatsSchema);
module.exports = Stat;
