import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const authButton = this.props.auth
      ? ( <a href="/api/logout">LOGOUT</a> )
      : ( <a href="/api/auth/google">LOGIN</a> )

    return (
      <header>
        <Link to="/">LOGO</Link>

        <nav>
          <Link to="/users">USERS</Link>
          <Link to="/admins">ADMINS</Link>
          { authButton }
        </nav>
      </header>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
