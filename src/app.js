require('dotenv').config()
const express = require('express');
const configExpress = require('./config/express');
const connect = require('./config/database');
const routes = require('./routes');
const { formData } = require('./middleware/formData');

const app = express();

connect()

//setup express
configExpress(app);

//setup routes
routes(app);

app.post('/test-formdata', formData, (req, res) => {
  console.log('BODY', req.body)
  res.json(req.body)
})

module.exports = app;