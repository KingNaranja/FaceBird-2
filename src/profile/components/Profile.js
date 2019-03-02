import React, { Component } from 'react'
// CreatePost Component
import CreatePost from '../../post/components/Create-Post'
// MyPost feed component 
import MyPosts from '../../feed/components/MyPosts'

// posts context provider 
import { PostConsumer } from '../../post/components/PostProvider'
import styled from 'styled-components'

// profile component styles 
const ProfileWrapper = styled.div`
  @media (min-width: 600px) {
    height: 100vh;
    width: 70vw;
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: 2.5vw;
  }
`

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      
    }
  }
  render() {
    const { user } = this.props

    return (
      <ProfileWrapper>
        <PostConsumer>
          { ({ posts, addPosts, removePost, editPost }) => (
            <React.Fragment>
              <CreatePost addPosts={addPosts} posts={posts} user={user} />
              <MyPosts addPosts={addPosts} editPost={editPost} removePost={removePost} posts={posts} user={user}/>
            </React.Fragment>
          )}
        </PostConsumer>
      
      </ProfileWrapper>
    )
  }
}

export default Profile
