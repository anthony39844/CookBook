import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeList from './RecipeList.jsx'
import Recipe from './Recipe.jsx'
import  "./css/HeaderMenu.css";
import { useState } from 'react';

export function HeaderMenu(){
    const [currProps, setCurrProps] = useState({})
    const [recipes, setRecipes] = useState([])
    function handleFullRecipe (props){
        setCurrProps(props)
    }
    function updateRecipe (newRecipes){
        setRecipes(newRecipes);
    }
    return(
        <>
        <Router>
        <div className = "container">

            <h1>CookBook</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Recipe">Recipes</Link>
              <Link to ="/AddRecipe">Add Recipe</Link>
            </nav>
            </div>
            <Routes>
                <Route path="/"  element={<Home allRecipies={recipes}/>} />
                <Route path="/RecipeList" element={<RecipeList handleFull={handleFullRecipe} UpdateRecipe={updateRecipe}/>} />
                <Route path="/Full" element={<Recipe {...currProps}/>}/>
            </Routes>
        </Router>
        
        </>
    )
}