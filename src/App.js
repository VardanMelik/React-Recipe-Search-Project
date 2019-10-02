import React, {Component} from 'react';
import './App.css';
import {recipes} from './recipes/tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


class App extends Component {

  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=d012ccc20ad1e794fee4460740f8bc75",
    details_id: 35384
  };
//  Async Function
/*async getRecipes() {
  try {
    const data = await fetch(this.state.url)
    const jsonData = await data.json()
    this.setState({
      recipes:jsonData.recipes
    })
  }catch(error){ console.log(error)}

};

// componentDidMount
componentDidMount() {
  this.getRecipes()
}*/

render () {
  //console.log(this.state.recipes);

  return (
    <React.Fragment>
      { /*<RecipeList recipes={this.state.recipes} /> */ }
      <RecipeDetails id={this.state.details_id} />
    </React.Fragment>
  );
}
}

export default App;
