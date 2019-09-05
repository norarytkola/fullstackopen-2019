const { ApolloServer, UserInputError, gql } = require('apollo-server')
const mongoose = require('mongoose')
const Author = require('./models/author')
const Book = require('./models/book')
const User=require('./models.user')
const MONGODB_URI = 'mongodb+srv://fullstack:fullstack@cluster0-9jztp.mongodb.net/books?retryWrites=true&w=majority'
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'


mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const typeDefs = gql`
type Author {
  name: String!
  born:Int
  id: ID! 
}
type Book {
  title: String!
  author: Author!
  published: Int!
  genres: [String]
  id: ID!
}
type User {
  username: String!
  id: ID!
}

type Token {
  value: String!
}

  type Query {
     // ..
     me: User

    bookCount: Int!
    authorCount: Int!
    allAuthors:[Author!]!
    allBooks( genre:String):[Book!]!
  }
  type Mutation {
    createUser(
      username: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
    login(
      username: String!
      password: String!
    ): Token
    addBook(
      title: String!
      name:String!
      born:Int
      published: Int
      genres: [String]
    ): Book

    addAuthor(
      name:String!
      born:Int
    ): Author
  
    editAuthor(
      name:String!
      setBornTo:Int!
    ): Author

  }
`
const uuid = require('uuid/v1')

const resolvers = {
  Query: {
    me: (root, args, context) => {
      return context.currentUser
    },
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () =>Author.collection.countDocuments(),
    allBooks: (root, args) => { /*if (args.genre && args.author){
      return Book.find({author:args.author && genres.includes(args.genre)})
    }else if (args.genre){
      return Book.find(genres.includes(args.genre))
    }else if (args.author){
      return Book.find({name: args.author})
    } else  */
    return Book.find({})
  },
    allAuthors: () =>Author.find({}),
  },
  Book: {
    author: (root) => {
      return { 
        name: root.name,
        born: root.born
      }
    }
  },

  Mutation: {
    createUser: (root, args) => {
      const user = new User({ username: args.username })
      return user.save()
        .catch(error => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        })
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })
      if ( !user || args.password !== 'secret' ) {
        throw new UserInputError("wrong credentials")
      }
      const userForToken = {
        username: user.username,
        id: user._id,
      }
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    },
    addBook:async (root, args, {currentUser}) => {
      if (currentUser){
      const book=new Book({
        args
        })
        try{ await book.save()
    }
    catch (error) {
      throw new UserInputError(error.message, {
        invalidArgs: args,
      }) 
    }
  return book
      }},
    editAuthor: async(root, args) => {
      const toEdit=Author.find(
        {name: args.name})
        toEdit.born=args.setToBorn
        try {
         await toEdit.save()
        }catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        }
      },
    addAuthor: async(root, args, {currentUser}) => {
      if (currentUser){
        const newOne=new Author({...args})
       try{ await newOne.save()
       } catch(error){
         throw new UserInputError(error.message, {
           invalidArgs:args,
         })
       }
       return newOne
      }}
    } }


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      )
      const currentUser = await User.findById(decodedToken.id)
      return { currentUser }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})