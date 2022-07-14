const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo DB connected: ' + con.connection.host);
  } catch (err) {
    console.log('MongoDB connection error: ' + err);
    process.exit(1);
  }
}

module.exports = connectMongo;