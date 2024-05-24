import { Link } from "react-router-dom"


export default function Menu(){
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">INICIO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Recipies">CATEGORIAS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Ours">NOSOTROS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/Contact">CONTACTOS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}