'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/index-route');
const reservasRoute = require('./routes/reservas-route');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


app.use('/' , indexRoute);
app.use('/reservas', reservasRoute);

module.exports = app;