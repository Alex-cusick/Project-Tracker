const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const connectDB = require('./config/db.js');
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/account', require('./routes/accountRoute'));
app.use('/api/project', require('./routes/projectRoute'));


app.listen(port, () => console.log(`Server is running on port: ${port}`));
