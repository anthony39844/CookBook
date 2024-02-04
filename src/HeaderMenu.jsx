import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import ShowRecipe from './components/ShowRecipe.jsx';
import  "./HeaderMenu.css";

export function HeaderMenu(){
    return(
        <>
        <Router>
        <div className = "container">

            <h1>CookBook</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/ShowRecipe">Recipe List</Link>
            </nav>
            </div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/ShowRecipe" element={<ShowRecipe />} />
            </Routes>
        </Router>
        
        </>
    )
}