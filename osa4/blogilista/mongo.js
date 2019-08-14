const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-9jztp.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

const Blogi = mongoose.model('Blogi', blogSchema)

const blog = new Blogi({
  title:"testi", 
  author:"Testaaja",
  url:"www.testaantätä.fi",
  likes:5
})

blog.save().then(response => {
  console.log('blog saved!');
  mongoose.connection.close();
})
