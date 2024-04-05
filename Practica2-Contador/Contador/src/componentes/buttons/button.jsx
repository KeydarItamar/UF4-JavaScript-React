// import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './button.css'

// eslint-disable-next-line react/prop-types
function Boton(props) {
    // Determinar la clase del botón según el valor de esClick
    const btnClass = props.esClick ? 'btnClick' : 'btnReiniciar';
  
    return (
      <button className={btnClass} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
  
  export default Boton;
