import React, { Component } from 'react'
import Post from '../../post/components/Post'
import { getAllMyPosts } from '../feed-api'


export class MyPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    console.log(props)
  }

 

  componentDidMount = () => {
    // after the initial render, fetch post data
    this.onGetMyPosts()
    
  }

  onGetMyPosts = () => {
    const { addPosts, posts } = this.props

    // fetch all posts
    getAllMyPosts(this.props.user)
      .then(response =>{return response.json()})
      .then( (response) =>{
        // update state with posts
        addPosts(response.posts)
      })
    
  }

  render() {
    const { posts } = this.props

    return (
      <div className='my-posts'>
        {/* all user's posts */}
        <h2>Your Posts</h2>
        {
          posts.map( post => (
            <Post  className='post' key={post._id} text={post.text} nickname={post.owner.nickname} date={post.updatedAt.slice(0, 10)}/>
            
          ))
        }

      </div>
    )
  }
}

export default MyPosts
