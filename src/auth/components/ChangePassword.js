import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, changePassword } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import { FormControl, FormGroup, Button } from 'react-bootstrap/'


const ChangePassForm = styled.div`
  @media (min-width: 600px){
    width: 100%; 
    margin-left: 15vw;
    margin-top: 15vw;

  }
`

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  changePassword = event => {
    event.preventDefault()

    const { oldPassword, newPassword } = this.state
    const { flash, history, user } = this.props

    changePassword(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.changePasswordSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePasswordFailure, 'flash-error'))
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <ChangePassForm inline>
        <FormGroup>
          <FormControl name="oldPassword" type="oldPassword" onChange={this.handleChange} placeholder="Old Password" />
        </FormGroup>
        <FormGroup>
          <FormControl name="newPassword" type="newPassword" onChange={this.handleChange} placeholder="New Password" />
        </FormGroup>
        <Button onClick={this.changePassword}>Change Password</Button>
      </ChangePassForm>
    )
  }
}

export default withRouter(ChangePassword)
