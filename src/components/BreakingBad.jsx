import axios from "axios"
import { useState, useEffect } from "react";

const BreakingBad = () => {

    const [character, setCharacter] = useState ({})

    useEffect ( () => {

        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then(resp => {
                console.log(resp.data);
                setCharacter(resp.data)
            })
            .catch(error => console.error (error))
    }, [])      

    return (
        <div>
            <p>{character.value}</p>
        </div>
    )
}

export default BreakingBad;