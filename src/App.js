import React, { createContext, useState, useEffect, useRef } from "react"
import { MainPage, PostInformation, PostForm, PageNotFound } from "pages"
import { NavBar } from "components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getAll } from "../src/client/posts"
import "./App.css"

export const PostsContext = createContext()

const App = () => {
  const [posts, setPosts] = useState([])
  const componentMounted = useRef(true)

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAll()
      if (componentMounted.current) {
        setPosts(posts.sort((a, b) => b.id - a.id))
      }
      return () => {
        componentMounted.current = false
      }
    }
    getPosts()
  }, [])

  return (
    <Router>
      <NavBar />
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/post" element={<PostForm />} />
          <Route path="/post/:id" element={<PostInformation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PostsContext.Provider>
    </Router>
  )
}

export default App
