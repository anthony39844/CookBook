import {React, useState, useEffect} from 'react';
import  Recipe  from '../Recipe'
import SlideShow from '../SlideShow';
function Home({}) {
  const [recipes, setRecipes] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null){
      return []
    }
    return JSON.parse(localValue)
  })
  
  const len = Math.min(recipes.length, 3)
  recipes.sort(() => Math.random() - 0.5);
  const randomObjects = recipes.slice(0, len);
  return (
    <>
      <h2>Home Page</h2>
      <SlideShow slides ={randomObjects} delay ={3000}></SlideShow>
  </>
  )
}

export default Home;
