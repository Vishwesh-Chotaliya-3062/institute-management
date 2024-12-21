const express = require('express')
const { getBoards, addBoard } = require('../controllers/board.controller')
const router = express.Router()

router.post('/add', addBoard)
router.get('/list', getBoards)

module.exports = router
