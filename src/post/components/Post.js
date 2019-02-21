import React, { Component } from 'react'
import '../post.scss'

import PostButtons from './Button'

// takes post object as prop 
// and renders Post
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOwner:  false
    }
  }

  componentDidMount = () => {
    
    const { nickname:owner, user } = this.props
    // set state if the post belongs to the user
    if ( user ) {
      owner === user.nickname ? this.setState({isOwner:true}):null
    }
  }

  render() {
    const { date, nickname, text, id:owner, user, removePost } = this.props

    return (
      <div className='post card'>
        <div className="post-header row">
          <h4>{ nickname}</h4>
          <p>{ date }</p>
        </div>
        <div className="post-body">
          <h5>{ text }</h5>
          {
            // display auth Buttons if post belongs to user
            this.state.isOwner && 
            <PostButtons removePost={removePost} id={owner} user={user} text={text} />
          }
        </div>
      </div>
    )
  }
}

export default Post
