const express = require('express')
const connectDB = require('./config/db')

const boardRoutes = require('./routes/board.route')
const universityRoutes = require('./routes/university.route')
const degreeRoutes = require('./routes/degree.route')
const classCategoryRoutes = require('./routes/classCategory.route')
const instituteTypeRoutes = require('./routes/instituteType.route')
const mediumRoutes = require('./routes/medium.route')
const standardRoutes = require('./routes/standard.route')
const subjectRoutes = require('./routes/subject.route')
const userRoutes = require('./routes/user.route')
const examRoutes = require('./routes/exam.route')

const app = express()
app.use(express.json())

connectDB()

app.use('/api/boards', boardRoutes)
app.use('/api/universities', universityRoutes)
app.use('/api/degrees', degreeRoutes)
app.use('/api/class-categories', classCategoryRoutes)
app.use('/api/institute-types', instituteTypeRoutes)
app.use('/api/mediums', mediumRoutes)
app.use('/api/standards', standardRoutes)
app.use('/api/subjects', subjectRoutes)
app.use('/api/users', userRoutes)
app.use('/api/exams', examRoutes)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
