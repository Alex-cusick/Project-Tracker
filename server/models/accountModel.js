const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
}, {
  timestamps: true
})

const Account = mongoose.model('accounts', accountSchema);

module.exports = Account; 