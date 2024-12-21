const express = require('express')
const { addExam, getExamsByInstituteType } = require('../controllers/exam.controller')
const router = express.Router()

router.post('/add', addExam)
router.get('/list/:instituteTypeId', getExamsByInstituteType)

module.exports = router
