const express = require('express')
const { addDegree, getDegrees, getDegreesByInstituteType } = require('../controllers/degree.controller')
const router = express.Router()

router.post('/add', addDegree)
router.get('/list', getDegrees)
router.get('/list/:instituteTypeId', getDegreesByInstituteType)

module.exports = router
