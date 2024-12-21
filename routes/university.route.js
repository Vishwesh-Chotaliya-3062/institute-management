const express = require('express')
const { addUniversity, getUniversities, getUniversitiesByInstituteType } = require('../controllers/university.controller')
const router = express.Router()

router.post('/add', addUniversity)
router.get('/list', getUniversities)
router.get('/list/:instituteTypeId', getUniversitiesByInstituteType)

module.exports = router
