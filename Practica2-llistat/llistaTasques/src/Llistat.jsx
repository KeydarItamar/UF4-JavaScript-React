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
    const tasquesRestants = tasques.filter(tasca => tasca.id != id);
    setTasques(tasquesRestants);
  };
  

  const editarTasca = (tascaAeditar) => {
    const tasquesActuals= tasques.map((tasca) => 
    tasca.id === tascaAeditar.id ? tascaAeditar : tasca
    )
    setTasques(tasquesActuals)
  }
  

  return (
    <>
    <h1>Llistat de tasques</h1>
      <Formulari funcAfegirTasca={afegirTasca} />
      {tasques.map((tasca) => (
        <Tasca 
        key={tasca.id}
        tasca = {tasca}
        funcEditarTasca = {editarTasca}
        funcEliminarTasca = {eliminarTasca}
        />
      ))}
    </>
  );
}




