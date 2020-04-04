const express = require('express')
const router = express.Router()
const apiController= require('../controller/api')

router.get('/news/:country', apiController.findContentNews)
router.get('/weather/:city', apiController.findContentWeather)
module.exports = router