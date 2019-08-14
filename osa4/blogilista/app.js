require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Blogi=require('./models/blogi')
const blogRouter=require('./controllers/blogRouter')

app.get('/api/blogs', (request, response) => {
    Blogi
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  app.post('/api/blogs', (request, response) => {
    const body = request.body
     
    const blog=new Blogi({
        title:body.title,
        author:body.author,
        url:body.url,
        likes:body.likes || 0
    })
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })


app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)



module.exports=app