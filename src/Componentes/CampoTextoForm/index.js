import "./CampoTextoForm.css"
const CapoTexto = (props) =>{
    console.log("datos: ", props.titulo)
    const MoodificadorPlaceholder = `${props.placeholder}...`
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder={MoodificadorPlaceholder}/>
    </div>
}

export default CapoTexto