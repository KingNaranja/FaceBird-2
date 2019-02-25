import React, { Component } from 'react'

export class UpdatePostModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  // update post form 
  handleUpdate = event => {
    // submission event
    event.preventDefault()
    const { updatePost } = this.props
    updatePost(this.state.text)

  }
  
  render() {

    const { modalVisible, showModal, text } = this.props

    const styles = modalVisible
      ? { display: 'block' }
      : { display: 'none' }

    return (
      <div>
      
        {/* <!-- Modal --> */}
        <div 
          className="modal"
          tabIndex='-1' 
          id="updateModal"
          role="dialog"
          style={styles}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span onClick={showModal} aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleUpdate}>
                  <div className="input-group">
                    <input onChange={this.handleChange} required name="text" type="text" className="form-control" placeholder={text} aria-label="" aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                      <button onClick={this.handleUpdate} className="btn btn-success" type="button">Update</button>
                    </div>
                  </div>

                </form>
              </div>
  
            </div>
          </div>
        </div>

      </div>
    )
  }
}


