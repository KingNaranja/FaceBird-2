import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainHeader = styled.header`
  align-items: center;
  border-right: 1px solid #bbb;
  display: flex;
  height: 100vh;
  padding: 0 1em;
  flex-direction: column;

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
  

  nav {
    align-items: flex-start;
    display: flex;
    flex-direction:  column;
    flex-grow: 1;
    justify-content: space-evenly;

  }

  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 1em;
    height: 20%;
    width: 160%;
    border-right: none;
    border-bottom: 1px solid #bbb;
    h1 {
      font-size: 2.5em;
    }
  }

  @media (max-width: 450px) {
    nav {
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      padding: 1em;
      a,
      span {
        border-bottom: 1px solid #bbb;
        border-radius: 1em;
        // margin-bottom: 5px;
        text-align: center;
        width: 100%;
        margin-left: -1vw;
      }
    }
  }

`

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/feed">Home</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    {/* <Link to="/">Home</Link> */}
  </React.Fragment>
)

const Header = ({ user }) => (
  <MainHeader className="main-header">
    <Link to={'/'}><h1>FaceBird</h1></Link>
    <span>The Newest Social Network</span>
    <nav className='nav flex-column justify-content'>
      { user && <span>Welcome back, <Link to={ '/profile' }>{user.nickname}</Link></span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </MainHeader>
)

export default Header
