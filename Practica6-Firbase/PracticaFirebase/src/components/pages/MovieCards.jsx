/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MovieCard = ({ title, image, rate, direction }) => {
    return (
        <div className="movie-card">
            <img src={image} alt={title} />
            <div className="movie-details">
                <h2>{title}</h2>
                <p><strong>Rate:</strong> {rate}</p>
                <p><strong>Direction:</strong> {direction}</p>
            </div>
        </div>
    );
};

export default MovieCard;
