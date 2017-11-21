import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../actions'

class Users extends Component {
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

// server calls loadData for components
// loaded on matched routes
const loadData = store => {
  return store.dispatch( fetchUsers() )
}

const mapStateToProps = ({users}) => {
  return { users }
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(Users),
  loadData
}
