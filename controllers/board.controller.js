const Boards = require('../models/board.model')

exports.getBoards = async (req, res) => {
  try {
    const boards = await Boards.find().lean().exec()
    res.status(200).json(boards)
  } catch (error) {
    console.error('getBoards(), error', error)
    res.status(500).json({ message: `Error fetching boards, ${error.message}` })
  }
}

exports.addBoard = async (req, res) => {
  try {
    const board = new Boards(req.body)
    await board.save()
    res.status(201).json({ message: 'Board added successfully', data: board })
  } catch (error) {
    console.error('addBoard(), error', error)
    res.status(500).json({ message: `Error adding board, ${error.message}` })
  }
}
