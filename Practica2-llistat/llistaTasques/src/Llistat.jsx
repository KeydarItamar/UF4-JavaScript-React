/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Formulari from "./Formulari";
import Tasca from "./Tasca";

export default function Llistat() {
  const[tasques, setTasques]= useState([]);
  
  const afegirTasca = novaTasca => {
    const tascaNova = [...tasques, novaTasca];
    setTasques(tascaNova);
  };
  const eliminarTasca = id => {
    const tasquesRestants = tasques.filter(tasca => tasques[id].titol != tasca.titol);
    setTasques(tasquesRestants);
  };
  
  const completarTasca = id => {
    const tasquesActuals = tasques.map(tasca => {
      console.log(tasca)
      if (tasques[id].titol == tasca.titol) {
        console.log(tasca.completada)
        return { ...tasca, completada: !tasca.completada };
      }
      return tasca;
    });
    setTasques(tasquesActuals);
  };
  

  return (
    <>
    <h1>Llistat de tasques</h1>
      <Formulari funcAfegirTasca={afegirTasca} />
      {tasques.map((tasca, index) => (
        <Tasca 
        key={index}
        id= {index}
        text= {tasca.titol}
        completada = {tasca.completada} 
        funcCompletarTasca = {completarTasca}
        funcEliminarTasca = {eliminarTasca}
        />
      ))}
    </>
  );
}




