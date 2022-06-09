import React from "react";
import './Counter.css';



const Counter = (props) => {
  return (
    <div className='Counter'>
      <input type='text' value={props.value} className='CounterInput' onChange={props.onChangeInput}></input>
      <button className='CounterButton' onClick={props.onAddClick}>+</button>
      <button className='CounterButton' onClick={props.onDecreaseClick}>-</button>
      <button className='CounterButton btnDelete' onClick={props.onDeleteClick}></button>
    </div>
  )
}








export default Counter;