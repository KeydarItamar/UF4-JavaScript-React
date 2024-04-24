/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Tasca(props) {
  const { tasca, funcEditarTasca, funcEliminarTasca } = props;
  const [completadaClass, setCompletadaClass] = useState("tascaNoCompletada");
  const [editar, setEditar] = useState(false);

  const handleCheckboxClick = () => {
    funcEditarTasca({
      ...tasca,
      completada: !tasca.completada,
    });
    setCompletadaClass(
      !tasca.completada ? "tascaCompleta" : "tascaNoCompletada"
    );
  };

  const handleEliminarClick = () => {
    console.log(tasca.id);
    funcEliminarTasca(tasca.id);
  };

  const handleEditarClick = () => {
    setEditar(!editar);
  };

  const handlerEditarTasca = (e) => {
    funcEditarTasca({
      ...tasca,
      titol: e.target.value,
    });
  };
  return (
    <div className={completadaClass}>
      <input
        type="checkbox"
        id={tasca.id}
        checked={tasca.completada}
        onChange={handleCheckboxClick}
      />
      <div>
        {editar === true ? (
          <input
            type="text"
            value={tasca.titol}
            onChange={handlerEditarTasca}
          />
        ) : (
          <span>{tasca.titol}</span>
        )}
      </div>
      <div className="btns">
        <button className="btn" onClick={handleEliminarClick}>
          Borrar
        </button>
        <button className="btn" onClick={handleEditarClick}>
          {editar ? "Guardar" : "Editar"}
        </button>
      </div>
    </div>
  );
}
