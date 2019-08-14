const blogRouter = require('express').Router()
const Blogi = require('../models/blogi')

blogRouter.delete('/:id', async (request, response) => {
  try {
    await Blogi.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})
blogRouter.get('/', (request, response) => {
  Blogi
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogRouter.delete('/:id', async(request, response) => {
    const id=Number(request.params.id)
     await blogs[id].remove()
      })
  
const generateId = () => {
      const maxId = blogit.length > 0
        ? Math.max(...blogit.map(b => b.id))
        : 0
      return maxId + 1
    }



module.exports = blogRouter