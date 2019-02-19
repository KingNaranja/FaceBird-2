import React, { Component } from 'react'
import RecentPost from './RecentPost'
import AllPosts from './AllPosts'
import '../feed.scss'


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
      <div className='feed row no-gutters'> 
        <RecentPost className='col-md' getUser={this.props.getUser} user={this.state.user} />
        <AllPosts className='col-md' getUser={this.props.getUser} user={this.state.user}/>
      </div>
    )
  }
}

export default Feed