const express = require('express')
const router = express()
const todoRouter = require('./todo')
const userRouter = require('./user')

router.use('/todos', todoRouter)
router.use('/user', userRouter)

module.exports = router