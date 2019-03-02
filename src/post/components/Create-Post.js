import React, { Component } from 'react'
import '../post-api' 
import { createPost } from '../post-api'
import { getAllMyPosts } from '../../feed/feed-api'

import styled from 'styled-components'

const CreatePostWrapper = styled.div`
  @media (min-width:600px){
    .new-post {
      margin-left: 35vw;
      input {
        width: 60vw;
      }
    }

  }
`

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: ''
    }
  }
  
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreatePost = event => {
    event.preventDefault()
    // reset input fields 
    const text = document.querySelectorAll('.new-post')[0]
    text.reset()

    const { newPost } = this.state
    const { user, addPosts, posts, refreshPosts } = this.props

    createPost( user, newPost )
      .then(response =>{ return response.json() })
      .then( () => { 
        // get my posts and refresh feed
        getAllMyPosts(user)
          .then( res =>{return res.json()})
          .then( res =>{
            // update state with posts
            addPosts(res.posts)
          })
      })
      
  }

  render() {
    return (
      <CreatePostWrapper>
        <form onSubmit={ this.onCreatePost } className="new-post form-inline justify-content-center m-0">
          <div className="form-group">
            <legend>What&apos;s on your mind?</legend>
          </div>
          <div className="form-group">
            <input required onChange={ this.handleChange }  name='newPost' type="text" className="form-control-lg" placeholder="facebird is cool"/>
          </div>
          <button type="submit" className="btn btn-success ">Publish</button>
        </form>
      </CreatePostWrapper>
    )
  }
}
 
export default CreatePost
 