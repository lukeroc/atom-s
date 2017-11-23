import React from 'react'
import { Route } from 'react-router-dom'

import App from '../components/app'
import Home from '../components/pages/Home'
import Users from '../components/pages/Users'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...Users,
        path: '/users',
        exact: true
      }
    ]
  }
]
