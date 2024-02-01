import {React, useState } from 'react'
import './App.css'
import { HeaderMenu } from './HeaderMenu'
import { Recipe } from './Recipe'
import { AddRecipe } from './AddRecipe'

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <AddRecipe></AddRecipe>
    </>
  )
}

export default App
