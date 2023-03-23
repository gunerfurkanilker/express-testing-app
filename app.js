const express = require('express')
const app = express();
const routes = require('./routes/routes')
const cors = require('cors')


app.use(express.json());
app.use(express.static('public'));
app.use(cors())
app.use(routes);

module.exports = app;