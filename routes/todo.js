const express = require('express')
const router = express.Router()
const TodoController = require('../controller/todo')

router.get('/todos', TodoController.findAll)
router.get('/todos/:id', TodoController.findByPk)
router.post('/todos', TodoController.create)
router.put('/todos/:id', TodoController.update)
router.delete('/todos/:id',TodoController.delete)
module.exports = router