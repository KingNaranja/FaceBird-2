import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import { FormControl, FormGroup, Button, FormLabel } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignInForm = styled.div`
  @media (min-width: 600px){
    width: 100%; 
    margin-left: 15vw;
    margin-top: 15vw;

  }
`

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/feed'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { email, password } = this.state

    const FaceBirdLogo = () => (
      <FontAwesomeIcon inline size="lg" icon="dove" />
    )

    return ( 
      <SignInForm inline>
        <FormGroup>
          <FormLabel>
            <FontAwesomeIcon icon='envelope'/>
            Email</FormLabel>
          <FormControl name="email" type="email" onChange={this.handleChange} placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <FormLabel>
            <FontAwesomeIcon icon='key'/>
            Password</FormLabel>
          <FormControl name="password" type="password" onChange={this.handleChange} placeholder="Password" />
        </FormGroup>
        <Button onClick={this.signIn}>Login</Button>
      </SignInForm>
    )
  }
}

export default withRouter(SignIn)
