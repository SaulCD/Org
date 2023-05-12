import "./Formulario.css"
import CapoTexto from "../CampoTextoForm"
import ListaOpcciones from "../ListaOpcciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejo de envios" )
        
        let archivarDatos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(archivarDatos)
    }

    return <section className="formulario"> 
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CapoTexto 
            titulo="Nombre"
            placeholder="Ingresar nombre" 
            required
            valor={nombre}
            actualizarValor={actualizarNombre}
        />
        <CapoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
        />
        <CapoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
        />
        <ListaOpcciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
        />
        <Boton>
            Crear
        </Boton>
    </form>
    </section>
}

export default Formulario