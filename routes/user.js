const express = require('express')
const router = express.router
const userController = require('../controller/user')

router.get('/signup', userController.signup)

router.get('/signin', userController.signin)

module.exports= router