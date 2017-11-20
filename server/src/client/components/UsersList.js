import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  renderUsers () {
    return this.props.users.map(user => {
      return (
        <li key={ user.id }>{ user.name }</li>
      )
    })
  }

  render () {
    return (
      <article className="page-users">
        <h1>This is the users list:</h1>
        <ul>
          { this.renderUsers() }
        </ul>
      </article>
    )
  }
}

const mapStateToProps = ({users}) => {
  return { users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)
