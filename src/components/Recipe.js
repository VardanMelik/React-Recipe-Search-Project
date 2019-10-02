import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe

    //console.log(this.props.recipe);
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="img-card-top" style={{height: "14rem"}} src={image_url} alt="image" />
            <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              provided by {publisher}
            </h6>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
