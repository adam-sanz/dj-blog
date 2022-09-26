import React, { useContext, useState } from "react"
import { PostsContext } from "../../App"
import { useNavigate } from "react-router-dom"
import "./PostForm.css"

const PostForm = () => {
  const navigate = useNavigate()
  const { posts, setPosts } = useContext(PostsContext)
  //hard-coded id
  const [formData, updateFormData] = useState({ id: 100, userId: 100 })

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPosts([formData, ...posts])
    navigate("/")
  }

  return (
    <div className="post-form-container">
      <h2>Create Post</h2>
      <label>Title</label>
      <textarea name="title" onChange={handleChange} />
      <label>Body</label>
      <textarea name="body" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default PostForm
