const express = require('express')
const { getUsers, addUser, getUserById } = require('../controllers/user.controller')
const router = express.Router()

router.post('/add', addUser)
router.get('/list', getUsers)
router.get('/list/:userId', getUserById)

module.exports = router
