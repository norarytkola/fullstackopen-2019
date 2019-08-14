const mongoose=require('mongoose')
const validator = require('mongoose-unique-validator')

let mongoUrl = process.env.URL
  if (process.env.NODE_ENV === 'test') {
    mongoUrl = process.env.TEST_URL
  }
console.log(mongoUrl)

mongoose.connect(mongoUrl, { useNewUrlParser: true })
.then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const blogSchema = mongoose.Schema({
    title:{
      type: String,
      required:true,
      minlength:2
    },
    author:{
      type: String,
      required:true,
      minlength:2
    },
    url: {
      type:String,
      required:true,
      minlength:5
    },
    likes:Number
  })

  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  blogSchema.plugin(validator)

  module.exports = mongoose.model('Blogi', blogSchema)