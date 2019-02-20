import React, { Component } from 'react'

// CreatePost Component
import CreatePost from '../../post/components/Create-Post'
// MyPost feed component 
import MyPosts from '../../feed/components/MyPosts'

// posts context provider 
import { PostConsumer, PostProvider } from '../../post/components/PostProvider'


export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      
    }
  }
  render() {
    const { user } = this.props

    return (
      <div>
        <PostProvider user={user}>
          <PostConsumer>
            { ({ posts, addPosts }) => (
              <React.Fragment>
                <CreatePost addPosts={addPosts} posts={posts} user={user} />
                <MyPosts addPosts={addPosts} posts={posts} user={user}/>
              </React.Fragment>
            )}
            
          </PostConsumer>
        </PostProvider>
      </div>
    )
  }
}

export default Profile
