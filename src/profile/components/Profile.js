import React, { Component } from 'react'
import '../profile.scss'
// CreatePost Component
import CreatePost from '../../post/components/Create-Post'
// MyPost feed component 
import MyPosts from '../../feed/components/MyPosts'

// posts context provider 
import { PostConsumer } from '../../post/components/PostProvider'


export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      
    }
  }
  render() {
    const { user } = this.props

    return (
      <div className='profile'>
        <PostConsumer>
          { ({ posts, addPosts, removePost, editPost }) => (
            <React.Fragment>
              <CreatePost addPosts={addPosts} posts={posts} user={user} />
              <MyPosts addPosts={addPosts} editPost={editPost} removePost={removePost} posts={posts} user={user}/>
            </React.Fragment>
          )}
        </PostConsumer>
      
      </div>
    )
  }
}

export default Profile
