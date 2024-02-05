import './Recipe.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Recipe({ image, name, timeNeed, difficulty, description, ingredients, steps, id}){
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
                        <p>{description}</p>
                        <p>{ingredients}</p>
                        <p>{steps}</p>
                        <p>Link to the whole recipe</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Recipe;