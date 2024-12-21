const express = require('express')
const { getSubjects, addSubject, getSubjectsByStandard } = require('../controllers/subject.controller')
const router = express.Router()

router.post('/add', addSubject)
router.get('/list', getSubjects)
router.get('/list/:standardId', getSubjectsByStandard)

module.exports = router
