/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";


export default function Formulari (props){

function creatasca(titol) {
    return {
        id: Math.floor(Math.random() * 10000),
        titol,
        completada: false,
    }
    }

const  [textTasca, setTextTasca] = useState('')

const canviTextTasca = e => {
    setTextTasca(e.target.value);
    };

    const enviarForm = e => {
        e.preventDefault();
        const tascaNova = creatasca(textTasca)
        props.funcAfegirTasca(tascaNova);
        setTextTasca('');
    }
    

    return (
        <form onSubmit={enviarForm}>
        <input className="input-form"
          id="tascaInput"
          type="text"
          value={textTasca}
          onChange={canviTextTasca}
        />
        <button disabled={textTasca.length === 0} type="submit">Afegir tasca</button>
      </form>
    )
}