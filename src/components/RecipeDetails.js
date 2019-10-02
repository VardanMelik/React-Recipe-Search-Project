import React, { Component } from 'react'
import {recipe} from '../recipes/tempDetails'


export default class RecipeDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=d012ccc20ad1e794fee4460740f8bc75&rId=${
        this.props.id}`
    }
  }


  // componentDidMount
  async componentDidMount() {
    try {
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      this.setState({
        recipes:jsonData.recipes
      })
    }catch(error){ console.log(error)}
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button"
              className="btn btn-warning text-capitalize">
              back to recipe list</button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/* Details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a href="{publisher_url}"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize" >
              publisher webpage</a>

              <a href="{source_url}"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2
              mx-3
               text-capitalize" >
              recepie url</a>
              <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">ingredients</h2>
              {
                ingredients.map( (item, index) => {
                  return (
                    <li key={index} className="list-group-item
                    text-slanted">
                    {item}
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
