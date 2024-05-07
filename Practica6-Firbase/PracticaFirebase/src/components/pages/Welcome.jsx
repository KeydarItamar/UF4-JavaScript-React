/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Welcome = () => {
const [userName, setUserName] = useState('')
const [showUserName, setShowUserName] = useState(false)

const handleUserName = (e) => {
    console.log(e)
    setUserName(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
   setShowUserName(true)
}
return (
    <div className='card'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={handleUserName} />
                <button type='submit' >enviar</button>
            </form>
        {!showUserName ?  <p>Como te llamas?</p> :
            <span>
                <p>Hola {userName}</p>
                <Link to="/indexMenu">Peliculas para el Verano</Link>
                </span>
            }
    </div>
  );
};

export default Welcome;