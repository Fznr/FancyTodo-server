const express = require('express')
const router = express()
const todoRouter = require('./todo')
const userRouter = require('./user')
const apiRouter= require('./api')

router.use('/todos', todoRouter)
router.use('/user', userRouter)
router.use('/api',apiRouter)

module.exports = router