import React from "react";
import Ingredient from "../Ingredient/Ingredient";


const Ingredients = (props) => {
  return props.ingredients.map((element, index) => (
    <Ingredient
    key={index}
    name={element.name}
    image={props.image.find(obj => obj.name === element.name).image}
    value={props.ingredients.find(obj => obj.name === element.name).count}
    changeInput={e => props.onChangeInput(e.target.value, element.name)}
    onAddClick={() => props.onAddClick(element.name)}
    onDecreaseClick={() => props.onDecreaseClick(element.name, element.count)}
    onDeleteClick={() => props.onDeleteClick(element.name)}
    >
    </Ingredient>
  ))
};










export default Ingredients;