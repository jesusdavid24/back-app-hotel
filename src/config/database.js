require('dotenv').config();
const mongoose = require('mongoose');

let connection

const connect = async () => {
  if(connection) return

  const MONGO_URI = process.env.MONGO_URL_DB

  connection = mongoose.connection

  connection.once('open', () => {
    console.log('Connected to MongoDB')
  })

  connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB')
  })

  connection.on('error', (error) => {
    console.log('Error connecting to MongoDB', error)
  })

  await mongoose.connect(MONGO_URI)
}


module.exports = connect