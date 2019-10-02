import React from 'react';
import './App.css';
import {recipes} from './recipes/tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


import Recipe from './components/Recipe'

import RecipeSearch from './components/RecipeSearch'


function App() {
  return (
    <React.Fragment>
      <RecipeList />
      <RecipeDetails />
    </React.Fragment>
  );
}

export default App;
