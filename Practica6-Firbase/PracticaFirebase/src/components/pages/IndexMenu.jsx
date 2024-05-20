// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Card'
import '../styles/indexMenu.css';


const IndexMenu = () => {
  return (
    <div className='index-container'> 
       <Card img='/src/components/img/movies.png' tittle='Ir a lista de peliculas' link="/movies/list"></Card> 
       <Card img='/src/components/img/addmovie.png' tittle='Añadir pelicula' link="/movies/add"></Card> 
    </div>
  );
};

export default IndexMenu;