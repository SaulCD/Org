import "./CampoTextoForm.css"
const CapoTexto = (props) =>{


    const MoodificadorPlaceholder = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input 
            placeholder={MoodificadorPlaceholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CapoTexto