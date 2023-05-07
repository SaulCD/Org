import "./Formulario.css"
import CapoTexto from "../CampoTextoForm"
import ListaOpcciones from "../ListaOpcciones"

const Formulario = () =>{
    return <section className="formulario"> 
    <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CapoTexto titulo="Nombre" placeholder="Ingresar nombre" />
        <CapoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CapoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpcciones/>
    </form>
    </section>
}

export default Formulario