import React, { Component } from 'react'
import Post from './Post'

import { getLatestPost, updatePost, deletePost } from '../feed-api'

export class RecentPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.getUser(),
      post: {
        text: '',
        id: null,
        nickname: '',
        date: null
      }
    }
  }

  componentDidMount = () => {
    // after the initial render, fetch post data
    this.onGetLatestPost()
    
  }

  onGetLatestPost = () => {
    // fetch last post
    getLatestPost(this.props.user)
      .then(response =>{return response.json()})
      .then( (response) =>{
        // update state with the last post
        this.setState({
          post: {
            text: response.post.text,
            id: response.post._id,
            nickname: response.post.owner.nickname,
            // date is a substring of the full date object
            date: response.post.createdAt.slice(0, 10)
          }
        })
      })
     
  }


  render() {
    const lastPost = this.state.post

    return (
      <div>
        <h2>Your Latest Post</h2>
        <Post  text={lastPost.text} date={lastPost.date} nickname={lastPost.nickname} id={lastPost.id}/>
      </div>
    )
  }
}

export default RecentPost
