const blogRouter = require('express').Router()
const Blogi = require('../models/blogi')
const User=require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogRouter.delete('/:id', async (request, response, next)=>{
  try {
    const b=Blogi.findById(request.params.id)
    const bloggaaja=b.user.id
    const dToken = jwt.verify(token, process.env.SECRET)
    if (!token || !dToken.id|| !dToken.id===bloggaaja) {
      return response.status(401).json({ error: 'Et voi poistaa tätä blogia.' })
    }else {
   await 
      Blogi.findByIdAndRemove(request.params.id)
   response.status(204).end()
   }}
   catch (exception) {
      next(exception)
    } 
  })

  blogRouter.put('/:id', async(request, response, next)=>{
      try{
      await Blogi.findByIdAndUpdate(request.params.id,request.body, {new:true})
      response.status(204).end()
      }
      catch(exception){
        next(exception)
      }
})

blogRouter.get('/', async(request, response, next) => {
  try{
  const blogit=await Blogi.find({}).populate('user', {username:1, name:1})
  response.json(blogit.map(b => b.toJSON()))
 
  } catch (exception) {
  next(exception)
  }
})


blogRouter.post('/', async(request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const kayttaja = await User.findById(decodedToken.id)
  if (body.title===undefined||body.url===undefined){
      return response.status(400).json({
          error: 'Täydennä tiedot'
       })
  } 
  const blog=new Blogi({
      title:body.title,
      author:body.author,
      url:body.url,
      likes:body.likes || 0,
      user: kayttaja._id 
  })
  const uusi=await blog.save()
    kayttaja.blogs = kayttaja.blogs.concat(uusi._id)
    await kayttaja.save()
    response.json(uusi.toJSON())
  }
  catch(exception) {
    next(exception)
  }
})

module.exports = blogRouter