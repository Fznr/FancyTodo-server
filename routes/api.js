const express = require('express')
const router = express.Router()
const apiController= require('../controller/api')

router.get('/:city', apiController.findContent)
module.exports = router