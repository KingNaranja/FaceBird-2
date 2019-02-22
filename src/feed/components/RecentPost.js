import React, { Component } from 'react'
import Post from '../../post/components/Post'
import '../recentPost.scss'

import { getLatestPost, updatePost, deletePost } from '../feed-api'

export class RecentPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: {
        text: 'Join the Conversation!',
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

        if (response.post) {
          // update state with the last post
          this.setState({
            post: {
              text: response.post.text,
              id: response.post._id,
              owner: response.post.owner._id,
              nickname: response.post.owner.nickname,
              // date is a substring of the full date object
              date: response.post.createdAt.slice(0, 10)
            }
          })
        } else {
          return this.state.post
        }
        
      })
     
  }


  render() {
    const lastPost = this.state.post
    console.log(this.props)

    return (
      <div className='recent-post abs'>
        <h2>Your Latest Post</h2>
        <Post owner={lastPost.owner} text={lastPost.text} date={lastPost.date} nickname={lastPost.nickname} id={lastPost.id} getUser={this.props.getUser} />
      </div>
    )
  }
}

export default RecentPost
