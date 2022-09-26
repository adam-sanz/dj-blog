import React, { useEffect, useState, useRef } from "react"
import { CommentInformation } from "pages"
import { getCommentsById } from "../../client/comments"
import "./Comment.css"

const Comment = (props) => {
  const id = props.id
  const [comments, setComments] = useState([])
  const componentMounted = useRef(true)

  useEffect(() => {
    const getComments = async () => {
      const comments = await getCommentsById(id)
      if (componentMounted.current) {
        setComments(comments.sort((a, b) => b.id - a.id))
      }
      return () => {
        componentMounted.current = false
      }
    }
    getComments()
  }, [id])

  return (
    <div className="comment-section">
      <h2>Comments ({comments.length})</h2>
      {comments?.map((comment) => (
        <CommentInformation
          key={comment.id}
          comments={comment}
        ></CommentInformation>
      ))}
    </div>
  )
}

export default Comment
