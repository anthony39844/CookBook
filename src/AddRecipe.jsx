import './AddRecipe.css'
import React, { useState } from 'react';

export function AddRecipe({ addingRecipe }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('');
    const [timeNeed, setTimeNeed] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [recipes, setRecipes] = useState([])

    const handleAddRecipe = () => {
        let recipe =  {            
            name : name,
            timeNeed: timeNeed,
            difficulty: difficulty,
            description : description,
            ingredients : ingredients,
            steps : steps
        };
        addingRecipe(recipe);
        const updatedRecipes = [...recipes, {name : name, time: timeNeed, diff: difficulty, description : description, ingredients : ingredients, steps : steps}]
        setName('');
        setTimeNeed('');
        setDifficulty('Easy');
        setDescription('');
        setIngredients([]);
        setSteps([]);
        setRecipes(updatedRecipes);
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTimeNeed(event.target.value);
    };

    const handleDiffChange = (event) => {
        setDifficulty(event.target.value);
    };

    const handleDescChange = (event) => {
        setDescription(event.target.value);
    };

    const handleIngredChange = (event) => {
        setIngredients(event.target.value);
    };

    const handleStepsChange = (event) => {
        setSteps(event.target.value);
    };
  
    return (
      <div>
        <div className="add-recipe">
            <div className='img-info'>
                <input className='img-input' type="file" accept="image/*" onChange={handleFileChange} />
                {selectedFile && (
                    <img className='add-recipe-img' src={selectedFile.name}></img>
                )}
            </div>
            <div className="recipe-info">
                <div className="top-info">
                    <input type="text" placeholder='Name' value={name} onChange={handleNameChange}></input>
                    <input type="text" placeholder='Time (min)' value={timeNeed} onChange={handleTimeChange}></input>
                    <select className='difficulty' onChange={handleDiffChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className='inputs'>
                    <textarea
                    value={description}
                    onChange={handleDescChange}
                    placeholder="Description"/>
                </div>
                <div className='inputs'>
                    <textarea
                    value={ingredients}
                    onChange={handleIngredChange}
                    placeholder="Ingredients"/>
                </div>
                <div className='inputs'>
                    <textarea
                    value={steps}
                    onChange={handleStepsChange}
                    placeholder="Steps"/>
                </div>
            </div>
        </div>
        <div className='add-button'>
            <button className='button addbutton' onClick={handleAddRecipe}>
                Add
                <div className="arrow-wrapper">
                <div className="arrow"></div>
                </div>
            </button>
        </div>
      </div>
    );
}