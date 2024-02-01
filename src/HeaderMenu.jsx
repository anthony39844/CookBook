import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Recipe from './components/RecipeList.jsx';
import { AddRecipe } from './components/AddRecipe.jsx';
import  "./HeaderMenu.css";
export function HeaderMenu(){
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
                <Route path="/" exact element={<Home />} />
                <Route path="/Recipe" element={<Recipe />} />
                <Route path="/AddRecipe" element={<AddRecipe />} />
            </Routes>
        </Router>
        
        </>
    )
}