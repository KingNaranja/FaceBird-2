import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const MainHeader = styled.header`
  /* align-items: center; */
  border-right: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  a,
  span {
    color: #252B35;
    font-size: 1.2em;
    margin: 0 15px;
    text-decoration: none;
    :hover{
      color: #4D6A6D;
    }
  }
  
  .user {
    padding: 1em;
    align-items: center;
    display: flex;
    flex-direction:  column;
    flex-grow: 1;
    justify-content: space-evenly; 
    height: 70vh;
  }

  @media (max-width: 600px) {
    width: inherit;
    margin-left: 5vw;
    flex-direction: column;
    font-size: 1em;
    height: inherit;
    border-right: none;
    h1 {
      margin-left: 5vw;
      font-size: 2.5em;
    }
  }

  @media (max-width: 450px) {
    padding-left: 0;
    
    .user {
      justify-content: space-between;
      /* flex-direction: column; */
      height: inherit;
      .noAuth {
        margin-left: 22vw;
        padding: 1vh;
    }
      a,
      span {
        border-bottom: 1px solid #bbb;
        border-radius: 1em;
        text-align: center;
      }
    }
  }

`

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Item as="li">
      <Link to="/feed">Home</Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/change-password">Change Password</Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/sign-out">Sign Out</Link>
    </Nav.Item>
    
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment >
    <Nav.Item  className="noAuth" as="li">
      <Link to="/sign-up">Sign Up</Link>
    </Nav.Item >
    <Nav.Item className="noAuth" as="li">
      <Link to="/sign-in">Sign In</Link>
    </Nav.Item>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    {/* <Link to="/">Home</Link> */}
  </React.Fragment>
)

const Header = ({ user }) => (
  <MainHeader className="main-header">

    <Nav>
      <Nav.Item >
        <Nav.Link to={'/'}><h1>FaceBird</h1></Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <span>The Newest Social Network</span>
      </Nav.Item>
      <Nav.Item >
        <Nav className='user flex-md-column'>
          { user && <span>Welcome back, <Link to={ '/profile' }>{user.nickname}</Link></span>}
          { user ? authenticatedOptions : unauthenticatedOptions }
          { alwaysOptions }
        </Nav>
      </Nav.Item>

    </Nav>
    
  </MainHeader>
)

export default Header
