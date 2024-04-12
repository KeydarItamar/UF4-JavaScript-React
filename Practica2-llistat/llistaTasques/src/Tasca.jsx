/* eslint-disable react/prop-types */

export default function Tasca(props){

  const { id, text, completada, funcCompletarTasca, funcEliminarTasca } = props;

  const completadaClase = completada ? 'tascaCompleta' : 'tascaNoCompletada';

  const handleCompletarClick = () => {
    funcCompletarTasca(id);
    console.log('clickado')
  };

  const handleEliminarClick = () => {
    console.log(id)
    funcEliminarTasca(id);
  };

  return (
    <div className={completadaClase}   >
      <span onClick={handleCompletarClick}>{text}</span>
      <button onClick={handleEliminarClick}>borrar</button>
    </div>
  );
}