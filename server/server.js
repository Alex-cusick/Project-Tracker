const express = require('express');
const dotenv = require('dotenv').config;
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/api/account', require('./routes/accountRoute'));

// app.use('/api/project', require('./routes/projectRoute'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
