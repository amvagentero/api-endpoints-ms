// Set up mongoose connection
const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/apiendpoints';
const connection = mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;

