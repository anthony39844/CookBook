import './Recipe.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Recipe(data){

    return(
        <div>
            <div className='recipe'>
                <img className='recipe-img' src={data.picture} alt = "Food Preview"></img>
                <div className="recipe-description">
                    <h1>{data.name}</h1>
                    <div className='time-diff'>
                        <FontAwesomeIcon id='clock' icon={faClock} />
                        <p>{data.time} min</p>
                        <p id='difficulty'>{}</p> 
                    </div>
                    <p>Link to the whole recipe</p>
                    <p>{data.description}</p>

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
export default Recipe;