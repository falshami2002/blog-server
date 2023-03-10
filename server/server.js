require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

app.get('/', (req,res) => {
    res.status(200).json({ message: "Welcome to my API"})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


