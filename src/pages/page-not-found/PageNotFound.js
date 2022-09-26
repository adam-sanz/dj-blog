import React from "react"
import { Link } from "react-router-dom"
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h2>Page not found</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default PageNotFound
