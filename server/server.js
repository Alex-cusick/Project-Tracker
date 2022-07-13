const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;


app.get('/signup:', (req, res) => {
  const {username, password} = req.body;
  console.log('signup ', username, password);
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

app.listen(3000, () => {
  console.log('listening on port 3000');
});
