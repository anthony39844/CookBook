import './Recipe.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


export function Recipe(){
    return(
        <div>
            <div className='recipe'>
                <img className='recipe-img' src='/public/pasta.jpeg'></img>
                <div className="recipe-description">
                    <h1>Name of the recipe</h1>
                    <div className='time-diff'>
                        <FontAwesomeIcon id='clock' icon={faClock} />
                        <p>16 min</p>
                        <p id='difficulty'>easy</p> 
                    </div>
                    <p>Description of the recipe</p>
                    <p>Link to the whole recipe</p>
                    <hr></hr>
                    <button className='button'>
                        Full Recipe
                        <div class="arrow-wrapper">
                            <div class="arrow"></div>

                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}