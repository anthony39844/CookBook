import {React, useState, useEffect} from 'react';
import  Recipe  from '../Recipe'
import SlideShow from '../SlideShow';
function Home({}) {
  const [recipes, setRecipes] = useState(()=>{  //get recipe from the local storage
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null){
      return []
    }
    return JSON.parse(localValue)
  })

  const len = Math.min(recipes.length, 3) //0-3 slides depending on how many are stored
  recipes.sort(() => Math.random() - 0.5);  //randomizes
  const randomObjects = recipes.slice(0, len);  //takes first 3 from randomized
  return (
    <>
      <h2>Home Page</h2>
      <SlideShow slides ={randomObjects} delay ={3000}></SlideShow>
  </>
  )
}

export default Home;
