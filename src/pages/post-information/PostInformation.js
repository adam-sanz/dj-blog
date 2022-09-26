import React, { useEffect, useState, useRef, useContext } from "react"
import { Comment } from "pages"
// import { getPostById } from "../../client/posts"
import { useParams } from "react-router-dom"
import { PostsContext } from "../../App"
import "./PostInformation.css"

const PostInformation = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const { posts } = useContext(PostsContext)
  const componentMounted = useRef(true)

  useEffect(() => {
    if (componentMounted.current) {
      const newPost = posts.filter(
        (post) => post.id.toString() === id.toString()
      )
      setPost(newPost)
    }
    return () => {
      componentMounted.current = false
    }
  }, [])

  //   useEffect(() => {
  //     const getSinglePost = async () => {
  //       try {
  //         const post = await getPostById(id)
  //         if (componentMounted.current) {
  //           setPost(post)
  //         }
  //         return () => {
  //           componentMounted.current = false
  //         }
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //     getSinglePost()
  //   }, [id])

  return (
    <div className="post-information-container">
      <h1>Post: {post[0]?.id}</h1>
      <h1>{post[0]?.title}</h1>
      <p>{post[0]?.body}</p>
      <Comment id={id}></Comment>
    </div>
  )
}

export default PostInformation
