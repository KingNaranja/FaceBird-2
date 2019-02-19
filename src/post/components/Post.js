import React, { Component } from 'react'
import '../post.scss'

const Post = props => {
// takes FaceBird post object as prop 
// and renders Post

  return (
    <div className='post card'>
      <div className="post-header row">
        <h4>{ props.nickname}</h4>
        <p>{ props.date }</p>
      </div>
      <div className="post-body">
        <h5>{ props.text }</h5>
      </div>
    </div>
  )
}

export default Post
