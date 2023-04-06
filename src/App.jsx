import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Characters';

function App() {
  
  // renderizado de listas

  const names = [ 'alan', 'frank', 'monica', 'rome', 'vini', 'nitolas', 'erica', 'sebas', 'angela'];

  // map

  /*
   parte visual

   callback del map -> define la funcion que se va a ejecutar por cada elemento del arreglo
   arreglo.map(() => <Elementos><Elementos/>)
  */

   const usuarios = [
    {
        nombre: "Susanita",
        animalFavorito : "Gato"
    },
    {
        nombre: "Pedro",
        animalFavorito : "Gato"
    },
    {
        nombre: "Carlos",
        animalFavorito : "Perro"
    },  
    {
        nombre: "Cristian",
        animalFavorito : "Hamster"
    },
    {
        nombre: "Ana",
        animalFavorito : "Perro"
    },  
    {
        nombre: "Karina",
        animalFavorito : null
    }, 
    {
        nombre: "Berenice",
        animalFavorito : "Gato"
    },  
    {
        nombre: "Salvador",
        animalFavorito : "Conejo"
    },  
    {
        nombre: "Omar",
        animalFavorito : "Ajolote"
    },  
    {
        nombre: "Carlos",
        animalFavorito : null
    },
    {
        nombre: "Lupita",
        animalFavorito: null
    } 
]

  const [characters, setCharacter] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(resp => setCharacter(resp.data.results))
      .catch(error => console.log(error))
  }, [])


  return (
    <div className="card">

        {/* <ul className='card'>
          {
            characters.map( character => { return <li key={character.name}> 
            <img src={character.image} alt="" />
            <h2>{character.name} </h2>
            <h2><span>Species:</span> {character.species} </h2>
            <h2><span>Gender:</span> {character.gender} </h2>
            <h1><span>Origin:</span> {character.origin.name} </h1>
            <h2 ><span>Status:</span> {character.status} </h2>
            </li>} )
          }
        </ul> */}

       <ul>
        {
          characters.map(character => (
            <Characters
            key= {character.name}
            characterData = { character }
            />
          ))
        }
       </ul>

        {
        /*
      <ul>
        <li> {names[0]} </li>
        <li> {names[1]} </li>
        <li> {names[2]} </li>
        <li> {names[3]} </li>
        <li> {names[4]} </li>
        <li> {names[5]} </li>
        <li> {names[6]} </li>
      </ul>
        */
        }{/*
          <ul>
        {
          names.map((item, indice) => <li key={item}>{item}</li>)
        }
          </ul>
      */}   
          

          {
            /*
              listado acupando renderizdo de listas de los nombres de todos los usuarios dentro del arreglo
              usuarios.map( (user, indice) => <li key={user.nombre+indice} > {user.nombre} </li>)
            */
          } 
          

    </div>
        
  );
}

export default App;
