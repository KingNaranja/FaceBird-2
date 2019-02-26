import React, { Component } from 'react'
import { deletePost, updatePost } from '../post-api'
import { UpdatePostModal } from '../components/Update-Post'

export class PostButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  
  onDeletePost = () => {
    const { id:owner, user, removePost, text } = this.props
    // send a delete request to API
    deletePost(user, owner )
      .then(()=> {
        removePost(text)
      })

  }
  
  onUpdatePost = (newPost) => {
    const { id:postId, user, editPost } = this.props
    // send patch request 
    updatePost(user, newPost, postId)
      .then(response => {return response.json()})
      .then(post => editPost( postId,post ))

    this.setState({ showModal: false })
      
      
  }

  showModal = event => {
    event.preventDefault()
    // show/hide modal state with modalVisible bool
    const modalVisible = !this.state.showModal
    this.setState({ showModal: modalVisible })

  }

  render() {

    const { text } = this.props

    return (
      <div className='button'>
        <button className='btn-outline-info update-post' onClick={this.showModal}>Edit</button>
        <button className='btn-outline-danger delete-post' onClick={this.onDeletePost} >Delete</button>
        
        {
          this.state.showModal && 
          <UpdatePostModal updatePost={this.onUpdatePost} showModal={this.showModal} modalVisible={this.state.showModal} text={text} /> 
        }

      </div>
    )
  }
}

export default PostButtons
