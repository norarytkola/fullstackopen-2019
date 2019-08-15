const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    })
    const savedUser = await user.save()
    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

userRouter.get('/', async(request, response, next) =>{
    try {
        const users=await User.find({}).populate('blogs', {title:1, author:1, url:1})
        response.json(users.map(b => b.toJSON()))
    } catch (exception) {
        next(exception)
        }
})

module.exports = userRouter