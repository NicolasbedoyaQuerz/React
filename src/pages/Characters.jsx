import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Characters = () => {

    const [characterList, setCharacterList] = useState([])
    const [pages, setPages] = useState( { next: null, prev: null} )
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

    useEffect(() => {
        /*
        axios 
            .get('https://rickandmortyapi.com/api/character')
            .then(resp => {
                setCharacterList(resp.data.results)
                setPages( {next : resp.data?.next, prev : resp.data?.prev} )
            })
            .catch(error => console.error(error))
            */
        //    getData('https://rickandmortyapi.com/api/character')
        axios
        .get(url)
        .then(resp => {
            setCharacterList(resp.data.results)
            setPages( {next : resp.data.info.next, prev : resp.data.info.prev} )
        })
        .catch(error=> console.error(error))
    }, [url])

/*
    const getData = url => {
        axios
            .get(url)
            .then(resp => {
                setCharacterList(resp.data.results)
                setPages( {next : resp.data.next, prev : resp.data.prev} )
            })
            .catch(error=> console.error(error))
    }
*/
    // const getNextPage = () => {
    //     axios
    //         .get(pages.next)
    //         .then(resp => {
    //             setCharacterList(resp.data.results)
    //             setPages( {next : resp.data.next, prev : resp.data.prev} )
    //         })
    //         .catch(error=> console.error(error))
    // }

    // const getPrevPage = () => {
    //     axios
    //         .get(pages.prev)
    //         .then(resp => {
    //             setCharacterList(resp.data.results)
    //             setPages({next: resp.data.next, prev: resp.data.prev})
    //         })
    //         .catch(error=> console.error(error))
    // }

    return (
        <div>
            <h1>Lista de de rick and morty</h1>
            <ul>
                {
                    characterList.map( character => (
                        <li key={character.name}><Link to ={`/Characters/${character.id}`}> {character.name}</Link>  </li>
                    ))
                }
            </ul>
            <button onClick={ () => setUrl(pages.prev)} disabled={!pages.prev}>anterior</button>
         
            <button onClick={ () => setUrl(pages.next)} disabled={!pages.next}>siguiente</button>
        </div>
    );
};

export default Characters;