import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) =>{

    // const [mostrar, actualizaMostrar] = useState(true)

    // const manejoClick = () => {
    //     console.log("ocultar/mostrar", !mostrar)
    //     actualizaMostrar(!mostrar)
    // }


    return <section className="organizacion-section">
        <h3 className="section-org">Mi Organización</h3>
        <img src="/img/add-boton.png" alt="icon-add" className="add-img" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg