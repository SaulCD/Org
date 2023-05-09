import "./CampoTextoForm.css"
const CapoTexto = (props) =>{
    console.log("datos: ", props.titulo)
    const MoodificadorPlaceholder = `${props.placeholder}...`
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder={MoodificadorPlaceholder} required={props.required}/>
    </div>
}

export default CapoTexto