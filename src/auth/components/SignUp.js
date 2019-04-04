import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, signUp, signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import { FormControl, FormGroup, Button } from 'react-bootstrap/'

const SignUpForm = styled.div`
  @media (min-width: 600px){
    width: 100%; 
    margin-left: 15vw;
    margin-top: 15vw;
  }
`

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signUp = event => {
    event.preventDefault()

    const { email, nickname, password, passwordConfirmation} = this.state
    const { flash, history, setUser } = this.props

    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, nickname, password, passwordConfirmation} = this.state

    return (
      <SignUpForm inline>
        <FormGroup>
          <FormControl name="email" type="email" onChange={this.handleChange} placeholder="Email" />
        </FormGroup>
        <FormGroup >
          <FormControl name="nickname" type="nickname" onChange={this.handleChange} placeholder="Nickname" />
        </FormGroup>
        <FormGroup>
          <FormControl name="password" type="password" onChange={this.handleChange} placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <FormControl name="passwordConfirmation" type="passwordConfirmation" onChange={this.handleChange} placeholder="Confirm Password" />
        </FormGroup>
        <Button onClick={this.signUp}>Sign Up</Button>
      </SignUpForm>
    )
  }
}

export default withRouter(SignUp)
