import React from "react";
import './TotalPrice.css';

const TotalPrice = (props) => {
  return (
    <p className='TotalPrice'>Price: {props.getTotalPrice} kgs</p>
  );
};





export default TotalPrice;