import "./ListaOpcciones.css"


const ListaOpcciones = () =>{
    const equipo = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]
    return <div className="lista-opcciones">
        <label>Equipo</label>
        <select>
            {equipo.map((equipo, index)=> <option key={index}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpcciones