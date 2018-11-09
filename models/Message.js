const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Messages
let Message = new Schema({
  id: {
    type: String
  },
  content: {
    type: String
  }
},{
    collection: 'messages'
});

module.exports = mongoose.model('Message', Message);