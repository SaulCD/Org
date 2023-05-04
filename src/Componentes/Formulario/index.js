import "./Formulario.css"
import CapoTexto from "../CampoTextoForm"

const Formulario = () =>{
    return <section className="formulario"> 
    <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CapoTexto />
        <CapoTexto/>
        <CapoTexto/>
    </form>
    </section>
}

export default Formulario