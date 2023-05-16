
import './App.css';
import { useState } from 'react';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';

function App() {

    const[mostrarFormulario, acturlizarMostrar] = useState(false)

  const cambiarMostrar =() =>{
    acturlizarMostrar(!mostrarFormulario)
  }
  //ternario--> condicion ? seMustra : noSeMuestra
  // cortocircuito --> condicion && semuestra 

  const equipo = [
    {
      titulo:"Programación",
      colorPrincipal:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrincipal:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrincipal:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrincipal:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrincipal:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrincipal:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrincipal:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
]
  return (
    <div className="App">
      <Header/>
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipo.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo}/>)
      }
    </div>
  );
}

export default App;
