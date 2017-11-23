import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">LOGO</Link>
        <Link to="/users">USERS</Link>
        <Link to="/admins">ADMINS</Link>
        <Link to="/login">LOGIN</Link>
      </header>
    )
  }
}
