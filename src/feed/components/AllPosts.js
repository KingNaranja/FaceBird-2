import React, { Component } from 'react'
import Post from '../../post/components/Post'
import {getAllPosts} from '../feed-api'



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
    // fetch all posts
    getAllPosts(this.props.user)
      .then(response =>{return response.json()})
      .then( (response) =>{
        // update state with posts
        this.setState({
          posts: response.posts
        })
      })
    
  }

  render() {

    return (
      <div>
        {/* all user's posts */}
        <h2>#global</h2>
        {
          this.state.posts.map( post => (
            <Post  className='post' key={post._id} text={post.text} nickname={post.owner.nickname} date={post.updatedAt.slice(0, 10)}/>
            
          ))
        }

      </div>
    )
  }
}

export default AllPosts
