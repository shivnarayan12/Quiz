
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database connection successful!');
    })
    .catch((error) => {
      console.error('Database connection failed:', error);
    });
};

