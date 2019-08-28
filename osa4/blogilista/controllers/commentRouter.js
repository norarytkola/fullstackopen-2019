const commentRouter = require('express').Router()
const Kommentti=require('../models/comment')


commentRouter.post('/:id', async(request, response, next) => {
    try{
    const body = request.body.comment
    console.log(body)
    const comment=new Kommentti({
        comment:body,
        blog:request.params.id
    })
    const uusi=await comment.save()
      response.json(uusi.toJSON())
    }
    catch(exception) {
      next(exception)
    }
  })
commentRouter.get('/', async(request, response, next) =>{
  try {
    const tekstit=await Kommentti.find({})
    response.json(tekstit.map(t=>t.toJSON()))
  }
  catch(exception) {
    next(exception)
  }
})

  module.exports=commentRouter