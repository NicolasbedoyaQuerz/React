import { Link } from "react-router-dom";

const Proyectos = () => {
    return (
        <div>
            <h1> Mis Proyectos </h1>
            <ul>
                <li>
                    <Link to = '/Proyectos/proyecto 1'>
                    proyecto 1
                    </Link>
                </li>
                <li>
                    <Link to = '/Proyectos/proyecto 2'>
                    proyecto 2
                    </Link>
                </li>
                <li>
                    <Link to = '/Proyectos/proyecto 3'>
                    proyecto 3
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Proyectos;