import './css/RecipePreview.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function RecipePreview({ image, name, timeNeed, difficulty, description, ingredients, steps, id, deleteRecipe, handleFull}){
    const props = { image, name, timeNeed, difficulty, description, ingredients, steps, id};
    return(
        <div>
            <div className='recipe'>
                {image ? (<img  className='recipe-img' src={image} alt={name} />) 
                : 
                (<div className="default-icon">No Image</div>)}
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
                        <Link className = "Link-full" to='/Full'>
                        <button className='button' onClick={()=>handleFull(props)}>
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