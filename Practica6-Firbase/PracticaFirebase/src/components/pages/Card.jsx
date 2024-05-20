/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../styles/card.css'
import { Link } from 'react-router-dom';
const Card = ({tittle, link, img}) => {
  return (
    <div className='card'>
      <img className='icono' src={img} alt="" />
      <Link className='link' to={link}>{tittle}</Link>
    </div>
  );
};

export default Card;