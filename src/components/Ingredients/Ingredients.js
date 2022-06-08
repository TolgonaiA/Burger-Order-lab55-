import React from "react";
import Ingredient from "../Ingredient/Ingredient";


const Ingredients = (props) => {
  console.log(props.image.find(obj => obj.name === 'Salad'))
  return props.ingredients.map(element => (
    <Ingredient
    name={element.name}
    image={props.image.find(obj => obj.name === element.name).image}
    >

    </Ingredient>
  ))
};










export default Ingredients;