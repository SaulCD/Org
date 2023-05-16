import "./Equipo.css"

const Equipo = (props) =>{
    const {colorPrincipal, colorSecundario, titulo} = props.datos

    const backgraound = {backgroundColor: colorSecundario}

    const estiloText = {borderColor: colorPrincipal}

    return <section className="equipo" style={backgraound}>
        <h3 style={estiloText}>{titulo}</h3>
        <div>

        </div>
    </section>

}

export default Equipo