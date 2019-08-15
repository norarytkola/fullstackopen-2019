require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogRouter=require('./controllers/router')
const userRouter = require('./controllers/userRouter')
const loginRouter = require('./controllers/login')
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

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return res.status(400).send({ error: 'malformatted id' })
    } 
    else if (error.name === 'JsonWebTokenError') {
      return response.status(401).json({
        error: 'invalid token'
      })
    }
  next(error)}
  
  app.use(errorHandler)

app.use(cors())
app.use(bodyParser.json())
app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)




module.exports=app