const mongoose = require('mongoose');

async function connect() {

  try {
    await mongoose.connect('mongodb://localhost:27017/education_dev');
    console.log('connect successfully!!!')
  } catch (error) {
    console.log('connect Failure@@')
  }

}

module.exports = { connect }
