import { useState } from 'react';
import {nanoid} from 'nanoid';
import TotalPrice from './components/TotalPrice/TotalPrice';
import Ingredients from './components/Ingredients/Ingredients';
import IngredientImage from './components/IngredientImage.js/IngredientImage';
import './App.css';
import './burger.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.jpg';
import saladImage from './assets/salad.jpg';
import baconImage from './assets/bacon.jpg';



const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 5, image: saladImage},
  {name: 'Bacon', price: 30, image: baconImage},
];


const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);



  const getTotalPrice = () => {
    let totalPrice = 20;
    for (let ingredient of ingredients) {
      let amount = 0;
      amount = ingredient.count * INGREDIENTS.find(obj => obj.name === ingredient.name).price;
      totalPrice += amount;
    }
    return totalPrice;
  };

  const changeInput =(value, name) => {
    const ingredientsCopy = ingredients.map(ingredient => {
      if (ingredient.name === name) {
        return {
          ...ingredient,
          count: value,
        }
      }
      return ingredient;
    })

    setIngredients(ingredientsCopy)
    
  };

  const addItem = (name) => {
    const ingredientsCopy = ingredients.map(ingredient => {
      if (ingredient.name === name) {
        return {
          ...ingredient,
          count: ingredient.count + 1,
        }
      }
      return ingredient;
    })

    setIngredients(ingredientsCopy);
  };

  const decreaseItem = (name, count) => {
    const ingredientsCopy = ingredients.map(ingredient => {
      if (count === 0) {
        return ingredient;
      } else if (ingredient.name === name) {
        return {
          ...ingredient,
          count: ingredient.count - 1,
        }
      }
      return ingredient;
    })

    setIngredients(ingredientsCopy);
  };

  const deleteItem = (name) => {
    const ingredientsCopy = ingredients.map(ingredient => {
      if (ingredient.name === name) {
        return {
          ...ingredient,
          count: 0,
        }
      }
      return ingredient;
    })

    setIngredients(ingredientsCopy);
  };

  let content = [];
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < ingredients[i].count; j++){
      content.push(<IngredientImage key={i*j} name={ingredients[i].name} />)
    }
  }


  return (
    <div className='Container'>
      <div className='Ingredients'>
        <Ingredients 
          ingredients={ingredients}
          image={INGREDIENTS}
          onChangeInput={changeInput}
          onAddClick={addItem}
          onDecreaseClick={decreaseItem}
          onDeleteClick={deleteItem}
        ></Ingredients>
      </div>
      <div className='Ingredients BurgerImage'>
        <div className="Burger BurgerPic">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
            {content}
          <div className="BreadBottom"></div>
        </div>
        <TotalPrice getTotalPrice={getTotalPrice()}/>
      </div>
    </div>
  )
};


export default App;
