import React, { Component } from 'react'

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
        <MyPosts user={user}/>
      </div>
    )
  }
}

export default Profile
