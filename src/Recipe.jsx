import './Recipe.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


export function Recipe(data){
    console.log(data)
    return(
        <div>
            <div className='recipe'>
                <img className='recipe-img' src='/public/pasta.jpeg'></img>
                <div className="recipe-description">
                    <h1>{data.RecipeName}</h1>
                    <div className='time-diff'>
                        <FontAwesomeIcon id='clock' icon={faClock} />
                        <p>{data.time} min</p>
                        <p id='difficulty'>{data.difficulty}</p> 
                    </div>
                    <p>{data.description}</p>
                    <p>Link to the whole recipe</p>
                    <hr></hr>
                    <button className='button'>
                        Full Recipe
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>

                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}