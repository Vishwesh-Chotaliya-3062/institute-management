const express = require('express')
const { addMedium, getMediums } = require('../controllers/medium.controller')
const router = express.Router()

router.post('/add', addMedium)
router.get('/list', getMediums)

module.exports = router
