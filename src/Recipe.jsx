import './Recipe.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Recipe(data){
    console.log(data)
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
                </div>
            </div>

        </div>
    )
}
export default Recipe;