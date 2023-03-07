import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  const getStatusClass = status => {
    if (status === 'Alive') {
      return 'alive';
    } else if (status === 'Dead') {
      return 'dead';
    } else {
      return 'unknown';
    }
  };

  return (
    <div className="container">
      {characters.map(character => (
        <div key={character.id} className={`card ${getStatusClass(character.status)}`}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
