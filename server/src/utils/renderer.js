import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config' // SSR rendering of routes with data

import Routes from '../client/routes'

export default (req, store) => {

  // Render to string the target component
  // Same as passing JSX to RenderDOM
  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.path } context={ {} }>
        <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  )

  // Make client app available from SSR
  return `
    <html>
      <head></head>
      <body>
        <main id="root">${content}</main>

        <script>
          // Get initial state from server and keep it
          // to initialise client store with same state
          window.INITIAL_STATE = ${ JSON.stringify( store.getState() ) }
        </script>

        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
