/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/indexMenu.css';



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
    <div className='card-welcome'>
        <h3>Bienvenido a mi practica!</h3>
          {!showUserName ? 
             <div>
                <p>Como te llamas?</p>
                <form onSubmit={handleSubmit}>
                        <input type="text" value={userName} onChange={handleUserName} />
                        <br />
                    </form>
                    
             </div> :
                <span>
                <p>Hola {userName}</p>
                <Link to="/indexMenu">Peliculas para el Verano</Link>
                </span>
            }
    </div>
  );
};

export default Welcome;