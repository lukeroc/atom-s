import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Routes from '../client/routes'

export default ({ path }) => {

  // Render to string the target component
  // Same as passing JSX to RenderDOM
  const content = renderToString(
    <StaticRouter location={ path } context={ {} }>
      <Routes />
    </StaticRouter>
  )

  // Make client app available from SSR
  return `
    <html>
      <head></head>
      <body>
        <section id="root">
          <main>
            ${content}
          </main>
        </section>

        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
