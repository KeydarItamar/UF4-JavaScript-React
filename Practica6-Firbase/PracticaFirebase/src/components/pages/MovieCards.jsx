/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MovieCard = ({ title, image, rate, direction,desc }) => {
    console.log(image)
    return (
        <div className="movie-card">
            <div className="movie-details">
                <h3>{title}</h3>
                <p><strong>Rate:</strong> {rate}</p>
                <p><strong>Direction:</strong> {direction}</p>
                <p className='desc'>{desc}</p>
            </div>
            <img className='img-fondo' src={image} alt={title} />
        </div>
    );
};

export default MovieCard;
