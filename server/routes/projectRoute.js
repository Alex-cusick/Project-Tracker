const express = require('express');
const { ModalTitle } = require('react-bootstrap');
const router = express.Router();

const Project = require('../models/projectModel.js');

// Get all projects
router.get('/', (req, res) => {
  Project.find()
  .then( data => {
      res.status(200).json(data);
    })
  .catch( err => sendError({log: err}));
});

// Create a new project
router.post('/', (req, res) => {
  const { title, status, description } = req.body;
  if (!title || !status || !description) {
    return sendError({ log: 'All fields are required' }, res);
  }
  Project.create({ 'title': title, 'status': status, 'body': description })
  .then( data => {
    res.status(201).json(data);
  })
  .catch( err => sendError({log: err}));
});

// Edit projects
router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  const proj = await Project.findById(req.params.id);
  if (!proj) sendError({ log: "Could not find project to update" });
  
  Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, data) => {
    if (err) sendError({ log: "Error updating project" });
    else return res.status(200).json(data);
  });
});

// Delete projects
router.delete('/:id', (req, res) => {
  Project.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) sendError({ log: "Error updating project" });
    else {
      console.log('removed project from database')
      res.status(200).json({ id: req.params.id })
    };
  })
});


// Invalid request sent:
router.use('/', (req, res) => sendError({
  log:'Invalid request sent: ' + req.method,
  message:'Invalid request sent: ' + req.method
}, res));
// Error handler
const sendError = (err, res) => {
  const defaultErr = {
    log: 'Unknown error in projectRoute',
    status: 500,
    message: { err: 'An error occurred with the server' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
};


module.exports = router;