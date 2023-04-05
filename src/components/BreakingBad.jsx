import axios from "axios";
import { useState, useEffect } from "react";


const BreakingBad = () => {

    // importar todo lo necesario
    // crear un estado para guardar la informacion y ocuparla despues
    // crear un useEffect
    // ejecutar axios para realizar la peticion
    // guardamos la respuesta en el estado y ocupamos donde corresponda

    const [character, setCharacter] = useState({})

    useEffect(() => {

        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then((resp) => {
                console.log(resp.data);
                setCharacter(resp.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const changeChiste = () => {
        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then((resp) => {
                console.log(resp.data);
                setCharacter(resp.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div>
            <p> {character.value} </p>
            <button onClick={changeChiste}>cambiar chiste</button>
        </div>
    );
};

export default BreakingBad;