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
    console.log(this.props)
  }

  render() {
    const {getUser, setUser, user} = this.props
    
    return (
      <div className='feed row no-gutters'> 
        <PostConsumer>
          { ({ removePost }) => (
            <React.Fragment>
              <RecentPost className='col-md' getUser={getUser} user={this.props.user} />
              <AllPosts removePost={removePost} className='col-md' getUser={this.props.getUser} user={this.props.user}/>
            </React.Fragment>
          )}
        </PostConsumer>
      </div>
    )
  }
}

export default Feed