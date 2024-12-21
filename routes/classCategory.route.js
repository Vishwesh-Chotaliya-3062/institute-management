const express = require('express')
const { getClassCategories, addClassCategory } = require('../controllers/classCategory.controller')
const router = express.Router()

router.post('/add', addClassCategory)
router.get('/list', getClassCategories)

module.exports = router
