// APP: códigos de lógica da aplicação
// CONFIG: códigos de configuração da aplicação

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

// CUSTOM MODULE
var app = require('./controllers/config/customExpress');


// CUSTOM MODULE
// const customExpress = require('./controllers/config/customExpress');
// const app = customExpress();


// TEMPLATE ENGINE
app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');


// ADD STATIC FILES
app.use('/public', express.static(path.join(__dirname, "public")));


// GENERATE THE GATE
app.listen(8080, function(error){ 
    if(error) throw error 
    console.log("SERVIDOR rodando na url http://localhost:8080"); 
});