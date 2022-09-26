import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Comment } from "pages"
import { PostsContext } from "../../App"
import "./MainPage.css"

const MainPage = () => {
  const { posts } = useContext(PostsContext)
  const [numberOfPosts, setNumberOfPosts] = useState(20)

  const loadMorePosts = () => setNumberOfPosts(numberOfPosts + 10)

  const truncate = (str, no_words) =>
    str.replaceAll("\\", "").split(" ").splice(0, no_words).join(" ") + "..."

  return (
    <div className="container">
      {posts?.slice(0, numberOfPosts).map((post, idx) => {
        return (
          <div className="sub-container" key={idx}>
            <h1>Post: {post?.id}</h1>
            <h2>{post?.title}</h2>
            <h4>{truncate(post?.body, 8)}</h4>
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
              <button>Read more</button>
            </Link>
            <Comment id={post.id}></Comment>
          </div>
        )
      })}
      <button onClick={loadMorePosts}>Load More</button>
    </div>
  )
}

export default MainPage
