import {React, useState} from 'react';
import  Recipe  from '../Recipe'
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
  console.log(randomObjects)
  return (
    <>
      <h2>Home Page</h2>
      {randomObjects && randomObjects.map((recipe) => (
          <li key = {recipe.key}>
            <div>
            {<Recipe

            image={recipe.image}
            name={recipe.name}
            timeNeed={recipe.timeNeed}
            difficulty={recipe.difficulty}
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            id={recipe.key}
            />}
          </div>
          </li>
          
        ))}
  </>
  )
}

export default Home;
