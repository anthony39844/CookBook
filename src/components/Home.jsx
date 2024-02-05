import {React, useEffect, useState} from 'react';
import Recipe from '../Recipe.jsx';

function Home({allRecipies}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.min(allRecipies.length,3)  //if less than 3 in list
  allRecipies.sort(() => Math.random() - 0.5); //sort random
  const randomObjects = allRecipies.slice(0, totalSlides);  //the 3 we are going to shuffle

  const interval = 3000;  //how often we rotate
  console.log(randomObjects)

  // useEffect(() => {   
  //         const intervalId = setInterval(() => {
  //           setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  //         }, interval);
  //         return () => clearInterval(intervalId);
  //   }, [totalSlides, interval]);
  return (
    <>
      <h2>Home Page</h2>
      <h3>Featured Recipes</h3>
      <div className='recipe-list'>
        <ul style={{ listStyle: 'none', fontSize: '20px'}}>
        {randomObjects && randomObjects.map((recipe) => (
          <li key = {recipe.key}>
            <div>
            {<Recipe

            image={recipe.image}
            name={recipe.name}
            timeNeed={recipe.timeNeed}
            difficulty={recipe.difficulty}
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            id={recipe.key}
            />}
          </div>
          </li>
          
        ))}
      </ul>
      </div>
  </>
  )
}

export default Home;