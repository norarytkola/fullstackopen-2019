
const dummy = (blogs) => {
    return 1
  }
  
const totalLikes=(blogs)=> {
  const reducer= (summa, like)=> summa+ like.likes
  return blogs.length === 0
		? 0
		: blogs.reduce(reducer, 0)
}

const favouriteBlog=(blogs)=>{
  let a=0
  let b=0
  let lista=[...blogs]
  for (i=0; i<blogs.length; i++){
    if (blogs[i].likes>a){
      a=blogs[i].likes
      b=i
    }
    }
   if (a>0){
      return blogs[b]
   }else {
     return null
   }
  }


module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}

