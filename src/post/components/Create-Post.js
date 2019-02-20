import React, { Component } from 'react'
import '../create-post.scss' 


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: ''
    }
  }
 
  render() {
    return (
      <form className=" new-post form-inline justify-content-center">
        <div className="form-group">
          <legend>What&apos;s on your mind?</legend>
        </div>
        <div className="form-group">
          <input type="text" className="form-control-lg" placeholder="facebird is cool"/>
        </div>
        <button type="submit" className="btn btn-success ">Publish</button>
      </form>
    )
  }
}
 
export default CreatePost
 