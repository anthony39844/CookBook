import {React, useEffect, useState} from 'react';
import RecipePreview from './RecipePreview.jsx';
import { AddRecipe } from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import './RecipeList.css';
import { Route, Routes} from 'react-router-dom';


function RecipeList({handleFull}) {
  const [recipes, setRecipes] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null){
      return []
    }
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(recipes))

  },[recipes])

  function addingRecipe(newRecipe){
    setRecipes([...recipes, newRecipe]);
  }
  function deleteRecipe(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <>
    <div className='recipe-and-add'>
      <div className='recipe-list'>
        <ul style={{ listStyle: 'none', fontSize: '20px'}}>
        {recipes && recipes.map((recipe) => (
          <li key = {recipe.key}>
            <div>
            {<RecipePreview 

            image={recipe.image}
            name={recipe.name}
            timeNeed={recipe.timeNeed}
            difficulty={recipe.difficulty}
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            id={recipe.key}
            deleteRecipe = {(id) => deleteRecipe(id)}
            handleFull={handleFull}
            />}
          </div>
          </li>
          
        ))}
      </ul>
      </div>
      <div className='recipe-add'>
          <AddRecipe addingRecipe={addingRecipe}></AddRecipe>
      </div>
  </div>
  </>
  );
}

export default RecipeList;

