const express = require('express')
const router = express.Router()
const TodoController = require('../controller/todo')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/',TodoController.create)
router.use(authorization)
router.get('/',TodoController.findAll)
router.get('/:id', TodoController.findByPk)
router.put('/:id', TodoController.update)
router.delete('/:id',TodoController.delete)
module.exports = router