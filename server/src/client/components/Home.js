import React from 'react'

const Home = () => {
  return (
    <article>
      <h1>I'm the Home Page component</h1>
      <button onClick={() => console.log('The button was clicked.')}>Click Me</button>
    </article>
  )
}

export default Home
