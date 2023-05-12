import "./ListaOpcciones.css"


const ListaOpcciones = (props) =>{
    const equipo = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]
    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }



    return <div className="lista-opcciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona el equipo</option>
            {equipo.map((equipo, index)=> <option key={index}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpcciones