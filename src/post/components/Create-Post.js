import React, { Component } from 'react'
import '../create-post.scss'
import '../post-api' 
import { createPost } from '../post-api'
import { getAllMyPosts } from '../../feed/feed-api'

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
    
    // get my posts and refresh feed
    getAllMyPosts(user)
      .then( res =>{return res.json()})
      .then( res =>{
        // update state with posts
        addPosts(res.posts)
      })
      
  }

  render() {
    return (
      <form onSubmit={ this.onCreatePost } className=" new-post form-inline justify-content-center">
        <div className="form-group">
          <legend>What&apos;s on your mind?</legend>
        </div>
        <div className="form-group">
          <input required onChange={ this.handleChange }  name='newPost' type="text" className="form-control-lg" placeholder="facebird is cool"/>
        </div>
        <button type="submit" className="btn btn-success ">Publish</button>
      </form>
    )
  }
}
 
export default CreatePost
 