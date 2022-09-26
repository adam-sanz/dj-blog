import React, { useEffect, useState, useRef } from "react"
import { Comment } from "pages"
import { getPostById } from "../../client/posts"
import { useParams } from "react-router-dom"
import "./PostInformation.css"

const PostInformation = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  const componentMounted = useRef(true)

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const post = await getPostById(id)
        if (componentMounted.current) {
          setPost(post)
        }
        return () => {
          componentMounted.current = false
        }
      } catch (error) {
        console.error(error)
      }
    }
    getSinglePost()
  }, [id])

  return (
    <div className="post-information-container">
      <h1>Post: {post.id}</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Comment id={id}></Comment>
    </div>
  )
}

export default PostInformation
