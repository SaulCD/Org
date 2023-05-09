import "./Formulario.css"
import CapoTexto from "../CampoTextoForm"
import ListaOpcciones from "../ListaOpcciones"
import Boton from "../Boton"

const Formulario = () =>{

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejo de envios", e )
    }

    return <section className="formulario"> 
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CapoTexto titulo="Nombre" placeholder="Ingresar nombre"  required/>
        <CapoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
        <CapoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
        <ListaOpcciones/>
        <Boton>
            Crear
        </Boton>
    </form>
    </section>
}

export default Formulario