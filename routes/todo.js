const express = require('express')
const router = express.Router()
const TodoController = require('../controller/todo')

router.get('/', TodoController.findAll)
router.get('/:id', TodoController.findByPk)
router.post('/', TodoController.create)
router.put('/:id', TodoController.update)
router.delete('/:id',TodoController.delete)
module.exports = router