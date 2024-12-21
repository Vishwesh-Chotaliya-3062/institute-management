const express = require('express')
const { getStandards, addStandard, getStandardsByClassCategory } = require('../controllers/standard.controller')
const router = express.Router()

router.post('/add', addStandard)
router.get('/list', getStandards)
router.get('/list/:classCategoryId', getStandardsByClassCategory)

module.exports = router
