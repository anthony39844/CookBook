import {React, useState} from 'react';
import RecipePreview from './RecipePreview.jsx';
import { v4 as uuidv4 } from 'uuid';
import { AddRecipe } from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import './RecipeList.css';

function RecipeList() {

  const [recipes, setRecipes] = useState([])

  function addingRecipe(newRecipe){
    setRecipes([...recipes, newRecipe]);
    console.log(recipes)
  }
  function deleteRecipe(id) {
    setRecipes(recipes => {
      return recipes.filter(recipe => recipe.id !== id);
    });
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

