const express = require('express')
const app = express.Router()

const Controller = require('../app/controllers/General.js')

app.get('/', Controller.index)


module.exports = app
