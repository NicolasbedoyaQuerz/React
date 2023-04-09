import { useNavigate } from "react-router-dom";

const Tecnologias = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1> Tecnologias Usadas </h1>
            <ul>
                <li>React</li>
                <li>HTML5</li>
                <li>JavaScript</li>   
                <li>CSS</li>  
            </ul>
            <button onClick={() => navigate(-1)}>Regresar</button>
        </div>
    );
};

export default Tecnologias;