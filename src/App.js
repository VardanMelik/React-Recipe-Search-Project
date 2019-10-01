import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Recipe />
        <RecipeDetails />
        <RecipeList/>
      </header>
    </div>
  );
}

export default App;
