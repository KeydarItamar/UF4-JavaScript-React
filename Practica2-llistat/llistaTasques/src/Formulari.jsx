/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

export default function Formulari (props){
const  [textTasca, setTextTasca] = useState('')

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
        console.log('value is:', e.target.value);
        };

    const enviarForm = e => {
        e.preventDefault();
        if (textTasca.trim() !== '') {
            const tascaNova = {
            titol: textTasca,
            completada: false
            };
            props.funcAfegirTasca(tascaNova);
            setTextTasca('');
        }
    }

    return (
        <form onSubmit={enviarForm}>
        <input
          id="tascaInput"
          type="text"
          value={textTasca}
          onChange={canviTextTasca}
        />
        <button type="submit">Afegir tasca</button>
      </form>
    )
}