import React, {Component} from 'react';
import './App.css';
import {recipes} from './recipes/tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


class App extends React.Component {

  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=d012ccc20ad1e794fee4460740f8bc75"
  };
//  Async Function
async getRecipes() {
  try {
    const data = await fetch(this.state.url)
    const jsonData = await data.json()
    this.setState({
      recipes:jsonData.recipes
    })
  }catch(error){ console.log(error)}

};
componentDidMount() {
  this.getRecipes()
}



render () {
  console.log(this.state.recipes);

  return (
    <React.Fragment>
      <RecipeList />
      <RecipeDetails />
    </React.Fragment>
  );
}
}

export default App;
