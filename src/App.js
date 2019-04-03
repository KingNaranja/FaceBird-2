import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

// user auth routes
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

// homepage component
import Home from './Home'
// feed Component
import Feed from './feed/components/feed'
// profile component 
import Profile from './profile/components/Profile'

// posts context provider 
import { PostProvider } from './post/components/PostProvider'
import { Container, Row, Col } from 'react-bootstrap'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })
  
  // getter method for App component's user state
  getUser = () => this.state.user

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <Container fluid>
        <Row noGutters >
          <React.Fragment>
            <Col md={3}  >
              <Header user={user} />
              {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
            </Col>
            
            
            <PostProvider user={user}>
              <Col md={6} >
                <main className='main text-center mx-auto' >
                  {/* Routes */}
                  <Route exact path='/' component={Home}/>
                  <Route path='/sign-up' render={() => (
                    <SignUp flash={this.flash} setUser={this.setUser} />
                  )} />
                  <Route path='/sign-in' render={() => (
                    <SignIn flash={this.flash} setUser={this.setUser} />
                  )} />
                  <AuthenticatedRoute user={user} path='/feed' render={() => (
                    <Feed className='' flash={this.flash} getUser={this.getUser} user={user} />
                  )} />
                  <AuthenticatedRoute user={user} path='/sign-out' render={() => (
                    <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
                  )} />
                  <AuthenticatedRoute user={user} path='/change-password' render={() => (
                    <ChangePassword flash={this.flash} user={user} />
                  )} />
                  <AuthenticatedRoute user={user} path='/profile' render={() => (
                    <Profile className='' flash={this.flash} getUser={this.getUser} user={user}/>
                  )} />
                </main>
              </Col>
              
            </PostProvider>
            
          </React.Fragment>

        </Row>
        

      </Container>
      
    )
  }
}

export default App
