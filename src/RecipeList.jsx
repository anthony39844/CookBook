import {React, useEffect, useState} from 'react';
import RecipePreview from './RecipePreview.jsx';
import { v4 as uuidv4 } from 'uuid';
import { AddRecipe } from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import './RecipeList.css';

function RecipeList() {
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
    setRecipes(recipes => {
      return recipes.filter(recipe => recipe.key !== id);
    });
    console.log(recipes.filter(recipe => recipe.key !== id))
  }
  return (
    <>
    <div className='recipe-and-add'>
      <div className='recipe-list'>
        <ul style={{ listStyle: 'none', fontSize: '20px'}}>
        {recipes && recipes.map((recipe) => (
          <div>
            {<RecipePreview 
            key={recipe.key}
            image={recipe.image}
            name={recipe.name}
            timeNeed={recipe.timeNeed}
            difficulty={recipe.difficulty}
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            id={recipe.key}
            deleteRecipe = {deleteRecipe}
            />
            }
            {/* {false && <Recipe
            key={uuidv4()}
            image={recipe.image}
            name={recipe.name}
            timeNeed={recipe.timeNeed}
            difficulty={recipe.difficulty}
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            />} */}
          </div>
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

