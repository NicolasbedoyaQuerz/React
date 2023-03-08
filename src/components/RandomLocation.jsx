import React, { useState } from 'react';
import axios from 'axios';
import CharactersList from './CharactersList';

const LocationSearch = () => {
  const [locationId, setLocationId] = useState('');
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);

  const handleLocationIdChange = event => setLocationId(event.target.value);

  const searchLocationById = async () => {
    try {
      const locationResponse = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      const searchedLocation = locationResponse.data;
      setLocation(searchedLocation);
      const characterResponses = await Promise.all(searchedLocation.residents.map(url => axios.get(url)));
      const searchedCharacters = characterResponses.map(response => response.data);
      setCharacters(searchedCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="locationId">Buscar ubicación por ID:</label>
      <input id="locationId" type="text" value={locationId} onChange={handleLocationIdChange} />
      <button onClick={searchLocationById}>Buscar</button>
      {location.name && (
        <>
          <h1>Ubicación encontrada: {location.name}</h1>
          <h2>Personajes de la ubicación:</h2>
          <CharactersList characters={characters} />
        </>
      )}
    </div>
  );
};

export default LocationSearch;
