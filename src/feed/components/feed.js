import React, { Component } from 'react'
import RecentPost from './RecentPost'
import AllPosts from './AllPosts'
// posts context consumer 
import { PostConsumer } from '../../post/components/PostProvider'
import styled from 'styled-components'

const FeedWrapper = styled.div`
  margin-left: 2.2em;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden; 
  width: 70vw;

  @media (max-width: 600px){
    margin-left: 11.5vw;
    width: 100vw;
    h1,h2 {
      font-size: 100%;
    }
  }

`
class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const {getUser, setUser, user} = this.props
    
    return (
      <FeedWrapper className='feed row no-gutters'> 
        <PostConsumer>
          { ({ addPosts, removePost, posts, editPost }) => (
            <React.Fragment>
              <RecentPost className='col-md' posts={posts} getUser={getUser} user={this.props.user} />
              <AllPosts posts={posts} addPosts={addPosts} editPost={editPost} removePost={removePost} className='col-md' getUser={this.props.getUser} user={this.props.user}/>
            </React.Fragment>
          )}
        </PostConsumer>
      </FeedWrapper>
    
    )
  }
}

export default Feed