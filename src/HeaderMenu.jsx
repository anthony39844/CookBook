import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeList from './RecipeList.jsx'
import Recipe from './Recipe.jsx'
import  "./HeaderMenu.css";

export function HeaderMenu(){
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
                <Route path="/RecipeList" element={<RecipeList />} />
                <Route path="/Recipe" element={<Recipe></Recipe>} />
            </Routes>
        </Router>
        
        </>
    )
}