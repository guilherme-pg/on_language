// APPLICATION CUSTOMIZATION

// REQUIRE EXPRESS: return a function
const express = require('express');
// const consign = require('consign');

// CONVERT THE BODY DATA
const bodyParser = require('body-parser');

// ORM FOR DATABASE
const mongoose = require('mongoose');

// CALLING THE FUNCTION RETURNED BY EXPRESS
const app = express();

// RETURN CONFIGURED THE MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// DATABASE CONNECTION
// mongoose.connect('mongodb://localhost:27017/wordsdata', { useNewUrlParser: true,useUnifiedTopology: true });

// IMPORTING THE ROUTS MODULE
const routes = require('../routes.js');

routes(app);


// EXPORT THE MODULE APP
module.exports = app;

// module.exports = () => {
//     app = express
//     middleware
//     routes
//     consign()
//         .include('controllers')
//         .into(app)
//     return app;
// };

