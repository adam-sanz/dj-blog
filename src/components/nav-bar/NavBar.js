import React from "react"
import { Link } from "react-router-dom"

import "./NavBar.css"
const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/post">create post</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
