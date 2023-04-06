import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Characters = ({characterData}) => {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/1')
            .then(resp => setDetail(resp.data))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <li> 
            <img src={characterData.image} alt="" />
            <h2>{characterData.name} </h2>
            <h2><span>Species:</span> {characterData.species} </h2>
            <h2><span>Gender:</span> {characterData.gender} </h2>
            <h1><span>Origin:</span> {characterData.origin.name} </h1>
            <h2 ><span>Status:</span> {characterData.status} </h2>
            </li>
        </div>
    );
};

export default Characters;