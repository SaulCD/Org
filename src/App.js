
import './App.css';
import { useState } from 'react';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario';
import MiOrg from './Componentes/MiOrg';

function App() {

    const[mostrarFormulario, acturlizarMostrar] = useState(true)

  const cambiarMostrar =() =>{
    acturlizarMostrar(!mostrarFormulario)
  }
  //ternario--> condicion ? seMustra : noSeMuestra
  // cortocircuito --> condicion && semuestra 

  return (
    <div className="App">
      <Header/>
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
