import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeList from './RecipeList.jsx'
import Recipe from './Recipe.jsx'
import  "./HeaderMenu.css";
import { useState } from 'react';

export function HeaderMenu(){
    const [currProps, setCurrProps] = useState({})
    function handleFullRecipe (props){
        setCurrProps(props)
    }
    return(
        <>
        <Router>
        <div className = "container">

            <h1>CookBook</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/RecipeList">Recipe List</Link>
            </nav>
            </div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/RecipeList" element={<RecipeList handleFull={handleFullRecipe}/>} />
                <Route path="/Full" element={<Recipe {...currProps}/>}/>
            </Routes>
        </Router>
        
        </>
    )
}