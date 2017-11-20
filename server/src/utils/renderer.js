import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../client/components/Home'

export default () => {

  // Render to string the target component
  // Same as passing JSX to RenderDOM
  const content = renderToString(<Home />)

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
