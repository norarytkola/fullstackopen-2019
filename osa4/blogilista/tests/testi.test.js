const testi = require('../utils/listhelper')


test('dummy returns one', () => {
  const blogs = ["blogi1", "blogi2", "blogi3"]

  const result = testi.dummy(blogs)
  expect(result).toBe(1)
})

describe('Total likes', () =>{
      const oneBlogList= [{
        title: "Pohdintaa",
        author: "Sara Parikka",
        url: "https://anna.fi/sara-parikka/blogi/",
        likes: 254,
        id: "5d43ddf8fcaf5016b41f995b"
      }]

      const manyBlogsList=[
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }]

        const emptyList=[]

      test('Empty list is null', () => {
          const result=testi.totalLikes(emptyList)
          expect(result).toBe(0)
        })
      test('List of many blogs', () =>{
        const result=testi.totalLikes(manyBlogsList)
        expect(result).toBe(36)
      })
      test('Likes of one-blog list', () =>{
      const result=testi.totalLikes(oneBlogList)
      expect(result).toBe(254)
      })
    })

    describe('Favouriteblog', () =>{
        const emptyList=[]
        const list= [ {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
          },
          {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0
          },
          {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
          },
          {
            _id: "5a422b891b54a676234d17fa",
            title: "First class tests",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
            likes: 10,
            __v: 0
          },
          {
            _id: "5a422ba71b54a676234d17fb",
            title: "TDD harms architecture",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
            likes: 0,
            __v: 0
          },
          {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2,
            __v: 0
          }
        ]
          const oneBlogList=[{
            title: "Pohdintaa",
            author: "Sara Parikka",
            url: "https://anna.fi/sara-parikka/blogi/",
            likes: 254,
            id: "5d43ddf8fcaf5016b41f995b"
          } ] 
          const favouriteBlog={
            title: "Pohdintaa",
            author: "Sara Parikka",
            url: "https://anna.fi/sara-parikka/blogi/",
            likes: 254,
            id: "5d43ddf8fcaf5016b41f995b"
          }

          test('Favouriteblog of empty list is null', () =>{
            const result=testi.favouriteBlog(emptyList)
            expect(result).toBe(null)
          })
          test('Favouriteblog of one-blog list', () =>{
            const result=testi.favouriteBlog(oneBlogList)
            expect(result).toEqual(favouriteBlog)
          })
          test('Favouriteblog of list', ()=>{
            const result=testi.favouriteBlog(list)
            expect(result).toEqual({
              _id: "5a422b3a1b54a676234d17f9",
              title: "Canonical string reduction",
              author: "Edsger W. Dijkstra",
              url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
              likes: 12,
              __v: 0
            })
          })
        
    })
