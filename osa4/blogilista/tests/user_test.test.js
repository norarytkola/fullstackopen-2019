const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User=require('../models/user.js')
const api = supertest(app)


const testi=({
  username: "Testusing",
  name: "Test User",
  password: "123456"
})

beforeEach(async () => {
  await User.deleteMany({})

  let testObject = new User(testi)
  await testObject.save()
})


  test('Adding user without valid username causes error', async() => {
      const testi={
        username:"aa",
        name:"Anna Aapinen",
        password:"001122"
      }
      const response=await api
        .post('/api/users')
        .send(testi)
        expect(400)
  })
  test('Adding blog without valid password causes error', async() => {
    const testi={
        username:"aapinen",
        name:"Anna Aapinen",
        password:"00"
    }
    const response=await api
      .post('/api/users')
      .send(testi)
      expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})