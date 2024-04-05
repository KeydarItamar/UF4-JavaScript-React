import { useState } from 'react'

import Contadorbox from './componentes/contadorBox/contador'; 
import Boton from './componentes/buttons/button';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementNum = () => {
     let c = count + 1 
     setCount(c);
     console.log(c)
  };
  
  const reiniciarNum =  () => {
     setCount(0);
  };

  return (
    <div className='main'>
      <Contadorbox className="div-contador" count = {count}></Contadorbox>
      <div>
        {/* Usar el componente Boton */}
        <Boton text="Clic" onClick={incrementNum} esClick={true} />
        <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
      </div>
    </div>
); 
  
}

export default App
