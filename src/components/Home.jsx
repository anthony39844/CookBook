import React from 'react';
import Recipe from '../Recipe'

function Home() {
  return (
    <>
      <h2>Home Page</h2>
  <Recipe picture = "/pasta.jpeg" time={12} description = "COOK" RecipeName="RAMENNNN" difficulty="easy asf"></Recipe>
  </>
  )
}

export default Home;
