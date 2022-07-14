const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
require("dotenv").config({path:"./config.env"});
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));
const database = require("./database/mongodb");

var data = JSON.stringify({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});

/*
curl --location --request POST 'https://data.mongodb-api.com/app/data-sewec/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: BtZ7oLf7FQtBBSQFzlEj11lkFPzuvH8vfSFXZny1wvPfytjbdiuOSHBs5YBbqtpF' \
--data-raw '{
    "collection":"<COLLECTION_NAME>",
    "database":"<DATABASE_NAME>",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}'
*/

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-sewec/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'BtZ7oLf7FQtBBSQFzlEj11lkFPzuvH8vfSFXZny1wvPfytjbdiuOSHBs5YBbqtpF',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

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

app.get('/', (req, res) => {

})

 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
