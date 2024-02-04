import './RecipePreview.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function RecipePreview(data){
    return(
        <div>
            <div className='recipe'>
                <img className='recipe-img' src={data.image} alt = "Food Image"></img>
                <div className="recipe-description">
                    <div className='recipe-head'>
                        <div className='recipe-name'>
                            <h1>{data.name}</h1>
                        </div>
                        <div className='time-diff'>
                            <FontAwesomeIcon id='clock' icon={faClock} />
                            <p>{data.timeNeed} minutes</p>
                            <p>{data.difficulty}</p> 
                        </div>
                    </div>
                    <div className="recipe-body">
                        <p>{data.description}</p>
                        <p>{data.ingredients}</p>
                        <p>{data.steps}</p>
                        <p>Link to the whole recipe</p>
                    </div>
                    _____________________________________
                    <Link to="/Recipe">
                        <button className='button'>
                            Full Recipe
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                        <button className='button' onClick={()=>data.deleteRecipe(data.id)}>Delete</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default RecipePreview;