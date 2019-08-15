const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blogi=require('../models/blogi.js')
const api = supertest(app)

const testi=({
  title: "Testiotsikko",
  author: "Sara Parikka",
  url: "www.testi.fi"
})

beforeEach(async () => {
  await Blogi.deleteMany({})

  let testObject = new Blogi(testi)
  await testObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('there is only one blog', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(1)
  })
  
  test('the blog is authored by Sara Parikka', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].author).toBe('Sara Parikka')
  })
  test('Blogs has ids', async () =>{
    const response=await api.get('/api/blogs')
    expect(response.body.id).toBeDefined
  })
  test('Posting works', async() =>{
  const testi2=new Blogi({
    title: "Testiotsikko2",
    author: "Testibloggaaja",
    url: "www.testi.ok",
    likes:0
  })
  const response=await api
  .post('/api/blogs')
  .send(testi2)
  expect(response.status).toBe(200)
  })

  test('Likes of testposting is 0', async() => {
    const testi={
      author: "Testibloggaaja",
      url: "www.testi.ok",
      title:"Moi"
    }
    await api
      .post('/api/blogs')
      .send(testi)
    const response=await api
        .get('/api/blogs')
        expect(response.body[1].likes).toBe(0)
  })

  test('Adding blog without title causes error', async() => {
      const testi={
        author: "Testibloggaaja",
        url: "www.testi.ok"
      }
      const response=await api
        .post('/api/blogs')
        .send(testi)
        expect(400)
  })
  test('Adding blog without url causes error', async() => {
    const testi={
      title:"Testi",
      author: "Testibloggaaja"
    }
    const response=await api
      .post('/api/blogs')
      .send(testi)
      expect(400)
})

afterAll(() => {
  mongoose.connection.close()
}) 