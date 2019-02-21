import React, { Component } from 'react'
import { deletePost, updatePost } from '../post-api'


export class PostButtons extends Component {
  constructor(props) {
    super(props)
  }
  
  onDeletePost = () => {
    const { id:owner, user, removePost, text } = this.props
    // send a delete request to API
    deletePost(user, owner )
      .then(()=> {
        removePost(text)
      })

  }
  
  onUpdatePost = () => {
    // take user and postId props and send request
    // then update the post provider

  }

  render() {
    return (
      <div>
        <button className='btn-outline-dark delete-post' onClick={this.onDeletePost} >delete</button>
        <button className='btn-outline-dark update-post' onClick={this.onUpdatePost} >edit</button>

      </div>
    )
  }
}

export default PostButtons
