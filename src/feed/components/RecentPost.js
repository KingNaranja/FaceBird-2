import React, { Component } from 'react'
import Post from '../../post/components/Post'
import { getLatestPost, updatePost, deletePost } from '../feed-api'

export class RecentPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: {
        text: 'Join the Conversation!',
        _id: null,
        owner: {nickname:'', _id:null},
        updatedAt: ''
      },
      deleted: false
    }
  }

  componentDidMount = () => {
    // after the initial render, fetch post data
    this.onGetLatestPost()
    
  }

  onGetLatestPost = () => {
    const { setRecentPost, recentPost } = this.props

    // fetch last post
    getLatestPost(this.props.user)
      .then(response =>{return response.json()})
      .then( (response) =>{

        if (response.post) {
          // update state with the last post
          this.setState({ post: response.post })
        } else {
          return this.state.post
        }
        
      })
     
  }

  componentDidUpdate = oldProps => {
    const { posts, getUser }  = this.props
    const user = getUser()
    let newPost
    
    // if they're are updated posts 
    if ( oldProps.posts !== posts ){
      // find your most recent post 
      newPost = posts.find(post =>{
        return post.owner._id == user._id
      })
      
      // if an updated post exists, 
      // update the state with the newest post
      // else if posts no longer exist, return to initial state
      newPost ? 
        this.setState({
          post: newPost 
        }) :
        this.setState({
          post: {
            text: 'Join the Conversation!',
            _id: null,
            owner: {nickname:'', _id:null},
            updatedAt: ''
          }
        })  
    }
  }

  render() {
    const lastPost = this.state.post

    return (
      <div className='recent-post abs'>
        <h2>Your Latest Post</h2>
        
        <Post owner={lastPost.owner._id} text={lastPost.text} date={lastPost.updatedAt.slice(0, 10)} nickname={lastPost.owner.nickname} id={lastPost._id} getUser={this.props.getUser} 
        />
        
      </div>
    )
  }
}

export default RecentPost
