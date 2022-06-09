import React from "react";
import './Counter.css';



const Counter = (props) => {
  console.log(props)
  return (
    <div className='Counter'>
      <input type='text' defaultValue={props.value} className='CounterInput' onChange={props.onChangeInput}></input>
      <button className='CounterButton' onClick={props.onAddItem}>+</button>
      <button className='CounterButton'>-</button>
      <button className='CounterButton'>delete</button>
    </div>
  )
}








export default Counter;