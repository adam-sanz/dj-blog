import React from "react"
import "./CommentInformation.css"

const CommentInformation = ({ comments: { name, body, email } }) => {
  return (
    <>
      <div className="comment-card">
        <div container wrap="nowrap" spacing={1}>
          <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentInformation
