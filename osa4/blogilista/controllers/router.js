const blogRouter = require('express').Router()
const Blogi = require('../models/blogi')


blogRouter.delete('/:id', async (request, response, next)=>{
  try{
   await 
      Blogi.findByIdAndRemove(request.params.id)
   response.status(204).end()
   }
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
  const blogit=await Blogi.find({})
  response.json(blogit.map(b => b.toJSON()))
 
  } catch (exception) {
  next(exception)
  }
})


blogRouter.post('/', async(request, response, next) => {
  const body = request.body
  if (body.title===undefined||body.url===undefined){
      return res.status(400).json({
          error: 'Täydennä tiedot'
       })
  } 
  else {
    try{
  const blog=new Blogi({
      title:body.title,
      author:body.author,
      url:body.url,
      likes:body.likes || 0
  })
  const uusi=await blog
    .save()
    response.json(uusi.toJSON())
  }
  catch(exception) {
    next(exception)
  }}
})

module.exports = blogRouter