import React, { Component } from 'react'
import RecentPost from './RecentPost'
import AllPosts from './AllPosts'



class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.getUser()
    }
    console.log(this.state)
  }

  render() {
    const {getUser, setUser, user} = this.props

    return (
      <div> 
        <RecentPost  getUser={this.props.getUser} user={this.state.user} />
        {/* <AllPosts getUser setUser user={this.state}/> */}
      </div>
    )
  }
}

export default Feed