const express = require('express')
const { getInstituteTypes, addInstituteType } = require('../controllers/instituteType.controller')
const router = express.Router()

router.post('/add', addInstituteType)
router.get('/list', getInstituteTypes)

module.exports = router
