import React, { Component } from 'react'
import RecentPost from './RecentPost'
import AllPosts from './AllPosts'
import '../feed.scss'
// posts context consumer 
import { PostConsumer } from '../../post/components/PostProvider'


class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const {getUser, setUser, user} = this.props
    
    return (
      <div className='feed row no-gutters'> 
        <PostConsumer>
          { ({ addPosts, removePost, posts, editPost }) => (
            <React.Fragment>
              <RecentPost className='col-md' posts={posts} getUser={getUser} user={this.props.user} />
              <AllPosts posts={posts} addPosts={addPosts} editPost={editPost} removePost={removePost} className='col-md' getUser={this.props.getUser} user={this.props.user}/>
            </React.Fragment>
          )}
        </PostConsumer>
      </div>
    )
  }
}

export default Feed