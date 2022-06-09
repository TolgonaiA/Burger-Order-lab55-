import React from "react";
import Ingredient from "../Ingredient/Ingredient";


const Ingredients = (props) => {
  console.log(props)
  return props.ingredients.map(element => (
    <Ingredient
    name={element.name}
    image={props.image.find(obj => obj.name === element.name).image}
    value={props.ingredients.find(obj => obj.name === element.name).count}
    changeInput={e => props.onChangeInput(e.target.value, element.name)}
    addItem={props.onAddItem(element.name)}
    >

    </Ingredient>
  ))
};










export default Ingredients;