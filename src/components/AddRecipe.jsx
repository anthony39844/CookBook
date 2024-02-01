import '../AddRecipe.css'
import React, { useState } from 'react';

export function AddRecipe(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
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
        <h1>Add Recipe</h1>
        <div className="add-recipe">
            <div className='img-info'>
                <input className='img-input' type="file" accept="image/*" onChange={handleFileChange} />
                {selectedFile && (
                    <img className='add-recipe-img' src={selectedFile.name}></img>
                )}
            </div>
            <div className="recipe-info">
                <div className='inputs'>
                    <input type="text" placeholder='Name' value={name} onChange={handleNameChange}></input>
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
            <button className='button addbutton'>
                Add
                <div className="arrow-wrapper">
                <div className="arrow"></div>
                </div>
            </button>
        </div>
      </div>
    );
}