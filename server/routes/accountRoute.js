const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const Account = require('../models/accountModel.js');

// Get user information
router.get('/myAccount', (req, res) => {
  res.status(201).json({message: 'My Account'});
});

// Log user in
router.post('/login', (req, res) => {
  
  res.status(201).json({message: 'login user'});
})

// Register user
router.post('/', async (req, res) => {
  console.log('Register user');
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) sendError({ log: 'Missing registration info', status: 400})
  const rights = (role === undefined ? 'default' : role )
  console.log(rights)

  // const userCheck = await Acccount.findOne(name);
  // if (userCheck) sendError({ log: 'User already registered', status: 400})

  ////////  Bcrypt  ////////
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);

  const user = await Account.create({
    name, 
    email,
    password: hashed,
    role: rights
  });

  if (user) res.status(201).json({
    _id: user._id,
    name: user.name
  })
  else (
    sendError({ log: 'Error registering user', status: 400})
  );
  // const {username, password} = req.body;
  // console.log('signup ', username, password);
  // const {username, password} = req.query;

  // bcrypt.hash(password, 16)
  // .then((hashed) => {
  //   console.log(hashed);
  //   res.status(200).send({
  //     'password': hashed,
  //   })
  // })
  // .catch ((err) => {
  //   console.log(err);
  // })
});


// Invalid request sent:
router.use('/', (req, res) => sendError({
  log:'Invalid request sent: ' + req.method,
  message:'Invalid request sent: ' + req.method
}, res));
// Error handler
const sendError = (err, res) => {
  const defaultErr = {
    log: 'Unknown error in accountRoute',
    status: 500,
    message: { err: 'An error occurred with the server' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
};

module.exports = router;