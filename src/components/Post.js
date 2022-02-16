import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, listPosts } from '../redux/postsReducer'

const Post = () => {
    const [nom,setNom]=useState("")
    const [prenom,setPrenom] =useState("")
    const dispatch = useDispatch()
    const {posts}=useSelector(state=>state.posts.posts)
    console.log(posts)
    useEffect(()=>{
        dispatch(listPosts())
    },[dispatch])
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addPost({id:Math.random(),nom,prenom}))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setNom(e.target.value)} />
          <input type="text" onChange={(e)=>setPrenom(e.target.value)}/>
            <button>AddPost</button>
      </form>
      {posts && posts.map((item,key)=>(
          <p key={item.nom}>{item.nom}</p>
      ))}
    </div>
  )
}

export default Post
