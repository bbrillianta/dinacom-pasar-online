//Import modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

//Basic configuration
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//Routing
require('./route-prefixes')(app);

//Starting server
app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});