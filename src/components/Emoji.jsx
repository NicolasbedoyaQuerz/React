import axios from "axios";
import { useState, useEffect } from "react";


const Emoji = () => {

    const [ indexEmoji, setIndexEmoji] = useState({})


    const changeEmoji = () => {
        axios
            .get('https://api.emojisworld.fr/v1/random?limit=1')
            .then((resp) => {
                console.log(resp.data);
                setIndexEmoji(resp.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {

        axios
            .get('https://api.emojisworld.fr/v1/random?limit=1')
            .then((resp) => {
                console.log(resp.data);
                setIndexEmoji(resp.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h1> {indexEmoji?.results?.[0]?.emoji} </h1>
            <p> {indexEmoji?.results?.[0]?.name} </p>
            <button onClick={changeEmoji}>cambiar de emoji</button>
        </div>
    );
};

export default Emoji;