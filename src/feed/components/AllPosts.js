import React, { Component } from 'react'
import Post from '../../post/components/Post'
import { getAllPosts } from '../feed-api'

export class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }


  componentDidMount = () => {
    // after the initial render, fetch post data
    this.onGetAllPosts()
    
  }

  onGetAllPosts = () => {
    const { addPosts, posts } = this.props

    // fetch all posts
    getAllPosts(this.props.user)
      .then(response =>{return response.json()})
      .then( (response) =>{
        // update state with posts
        addPosts(response.posts)
      })
    
  }

  render() {
    const { user, removePost, posts, editPost } = this.props
    return (
      <div className='text-center'>
        {/* all user's posts */}
        <h2>#global</h2>
        {
          posts.map( post => (
            <Post editPost={editPost} removePost={ removePost } user={ user } className='post' key={ post._id } text={ post.text } nickname={ post.owner.nickname } id={ post._id } owner={ post.owner._id } date={ post.updatedAt.slice(0, 10) }/>
            
          ))
        }

      </div>
    )
  }
}

export default AllPosts
