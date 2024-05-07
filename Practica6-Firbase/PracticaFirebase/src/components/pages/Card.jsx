/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../styles/card.css'
const Card = ({tittle}) => {
  return (
    <div className='card'>
      <h3>{tittle}</h3>
    </div>
  );
};

export default Card;