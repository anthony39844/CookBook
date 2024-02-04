import './RecipePreview.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function RecipePreview({ image, name, timeNeed, difficulty, description, ingredients, steps, id, deleteRecipe}){
    return(
        <div>
            <div className='recipe'>
                <img className='recipe-img' src={image} alt = "Food Image"></img>
                <div className="recipe-description">
                    <div className='recipe-head'>
                        <div className='recipe-name'>
                            <h1>{name}</h1>
                        </div>
                        <div className='time-diff'>
                            <FontAwesomeIcon id='clock' icon={faClock} />
                            <p>{timeNeed} minutes</p>
                            <p>{difficulty}</p> 
                        </div>
                    </div>
                    <div className="recipe-body">
                        <p>Description: {description}</p>
                        <p>Ingredients: {ingredients}</p>
                        <p>Steps: {steps}</p>
                    </div>
                    <hr></hr>
                    <div className='recipe-buttons'>
                    <Link className = "Link-full" to="/Recipe">
                        <button className='button'>
                            Full Recipe
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </Link>
                    <button className='button' onClick={()=>deleteRecipe(id)}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default RecipePreview;