import React from "react";
import Counter from "../Counter/Counter";
import './Ingredient.css';


const Ingredient = (props) => {
  console.log(props)
  return (
    <div className='Ingredient'>
      <img className='IngredientImage' src={props.image}></img>
      <p>{props.name}</p>
      <Counter value={props.value} onChangeInput={props.changeInput} onAddItem={props.addItem}/>
    </div>
  );
};






export default Ingredient;