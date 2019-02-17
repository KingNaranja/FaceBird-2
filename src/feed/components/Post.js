import React, { Component } from 'react'

const Post = props => {
// takes FaceBird post object as prop 
// and renders Post

  return (
    <div>
      <div className="post-header">
        <h4>{ props.nickname}</h4>
      </div>
      <div className="post-body">
        <p>{ props.date }</p>
        <h5>{ props.text }</h5>
      </div>
    </div>
  )
}

export default Post
