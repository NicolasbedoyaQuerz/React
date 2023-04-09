import { useParams } from "react-router-dom";

const ProyectosCreados = () => {

    const {name} = useParams()

    console.log(name);

    return (
        <div>
            <h1>soy el {name}</h1>
        </div>
    );
};

export default ProyectosCreados;