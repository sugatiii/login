const express = require('express');
const authController = require('../controller/auth.js')

const Router = express.Router();

Router.post('/',authController.register);

module.exports = Router;