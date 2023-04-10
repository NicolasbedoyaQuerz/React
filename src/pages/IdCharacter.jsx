import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";


const IdCharacter = () => {

    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios 
            .get(`https://rickandmortyapi.com/api/character/${ id }`)
            .then(resp => setData(resp?.data))
            .catch(error => console.error(error))
    }, [ id ])

    
    const navigate = useNavigate()

    const redirect = () => {
        navigate(-1)
    }


    return (
        <div>
            <h1>Detalle del Personaje</h1>
            <img src={data.image} />
            <p> { data?.name } </p>
            <p> {data.status} </p>
            <p>{data.species}</p>
            <button onClick={redirect}>Regresar</button>
        </div>
    );
};

export default IdCharacter;