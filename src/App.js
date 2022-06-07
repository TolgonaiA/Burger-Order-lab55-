import { useState } from 'react';
import {nanoid} from 'nanoid';
import TotalPrice from './components/TotalPrice/TotalPrice';

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
  {name: 'Bun', price: 20},
];


const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Bun', count: 1},
  ]);


  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let ingredient of ingredients) {
      let amount = 0;
      amount = ingredient.count * INGREDIENTS.find(obj => obj.name === ingredient.name).price;
      totalPrice += amount;
    }
    return totalPrice;
  }



  return (
    <div className='Container'>
      <div className='Ingredients'></div>
      <div className='Ingredients'>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <div className="BreadBottom"></div>
        </div>
        <TotalPrice getTotalPrice={getTotalPrice()}/>
      </div>
    </div>
  )
};


export default App;
