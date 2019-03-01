import React, { Component } from 'react'
import PostButtons from './Button'
import styled from 'styled-components'

// create styled component wrapper 
const PostWrapper = styled.div`
  width: 70vw;
  border-radius: 2.5vh;
  .post-header {
    justify-content: space-around;
  }
  .post-body {
    padding: 2vh;
  }
  .button {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  :hover {
    .button {
      visibility: visible;
      opacity: 1;
      >button{
        margin: 0 10vw 0 10vw ;
        
      }
    }
  }
    
  @media (max-width: 600px){
    h4,h5,p {
      font-size: 90%;
    }
    .post{
      width: 90vw;
    }
  }
`

// Post takes post object as prop 
// and renders Post
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOwner:  false
    }
  }

  componentDidMount = () => {
    const { owner, getUser, user } = this.props

    // set state if the post belongs to the user
    if ( user ) {
      owner === user._id ? this.setState({ isOwner:true }):null
    }
    
  }

  render() {
    const { date, nickname, text, id:owner, user, removePost, editPost } = this.props

    return (
      <PostWrapper className='card'>
        <div className="post-header row">
          <h4>{ nickname }</h4>
          <p>{ date }</p>
        </div>
        <div className="post-body">
          <h5>{ text }</h5>
          {
            // display auth Buttons if post belongs to user
            this.state.isOwner && 
            <PostButtons editPost={ editPost } removePost={ removePost } id={ owner } user={ user } text={ text } />
          }
        </div>
      </PostWrapper>
    )
  }
}

export default Post
