require('dotenv').config()
const express = require('express');
const configExpress = require('./config/express');
const connect = require('./config/database');
//const routes = require('./routes');

const app = express();
connect()


//setup express
configExpress(app);
//setup routes
//routes(app);

module.exports = app;