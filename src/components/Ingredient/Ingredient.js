import React from "react";
import './Ingredient.css';


const Ingredient = (props) => {
  return (
    <div className='Ingredient'>
      <img className='IngredientImage' src={props.image}></img>
      <p>{props.name}</p>
      <input></input>
      <button></button>
    </div>
  );
};






export default Ingredient;