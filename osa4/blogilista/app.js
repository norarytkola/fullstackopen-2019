require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Blogi=require('./models/blogi')
const blogRouter=require('./controllers/router')
const mongoose=require('mongoose')
mongoose.set('useFindAndModify', false)

let mongoUrl = process.env.URL
  if (process.env.NODE_ENV === 'test') {
    mongoUrl = process.env.TEST_URL
  }


mongoose.connect(mongoUrl, { useNewUrlParser: true })
.then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogRouter)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return res.status(400).send({ error: 'malformatted id' })
    } 
    next(error)
  }
  app.use(errorHandler)



module.exports=app