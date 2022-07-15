const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  // account: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
  title: {type: String, required: true},
  status: {type: String, required: true},
  body: {type: String, required: true}
}, {
  timestamps: true
})

const Project = mongoose.model('projects', projectSchema);

module.exports = Project; 