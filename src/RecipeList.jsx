import {React} from 'react';
import Recipe from './Recipe.jsx';
import { v4 as uuidv4 } from 'uuid';

function RecipeList({recipeList}) {
  return (
    <ul style={{ listStyle: 'none' , marginLeft: '30px', fontSize: '20px'}}>
    {recipeList.map((recipe) => (
      <Recipe 
      key={uuidv4()}
      name={recipe.name}
      description={recipe.description}
      ingredients={recipe.ingredients}
      steps={recipe.steps}
      />
    ))}
  </ul>
  );
}
export default RecipeList;
