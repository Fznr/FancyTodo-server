const express = require('express')
const router = express()
const todoRouter = require('./todo')

router.use('/', todoRouter)

module.exports = router