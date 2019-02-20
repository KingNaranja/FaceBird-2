import React, { Component } from 'react'

// CreatePost Component
import CreatePost from '../../post/components/Create-Post'
// MyPost feed component 
import MyPosts from '../../feed/components/MyPosts'

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
        <CreatePost user={user} />
        <MyPosts user={user}/>
      </div>
    )
  }
}

export default Profile
