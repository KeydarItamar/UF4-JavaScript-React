// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card'
import '../styles/indexMenu.css';


const IndexMenu = () => {
  return (
    <div className='index-container'> 
       <Card tittle='Ir a lista de peliculas'></Card> 
       <Card tittle='Añadir pelicula'></Card> 
    </div>
  );
};

export default IndexMenu;