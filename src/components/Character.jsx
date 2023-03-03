import React, { useState, useEffect } from 'react';

const Character = ({ idOrName }) => {
  const [character, setCharacter] = useState(null);
  const [unit, setUnit] = useState('m');

  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    setCharacter(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error(error));
  }, [idOrName]);

  const convertHeight = (height) => {
    switch (unit) {
      case 'cm':
        return height * 10;
      case 'm':
        return height / 10;
      case 'dm':
        return height;
      default:
        return height;
    }
  };

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img src={character.sprites.front_default} alt={character.name} />
          <h3><span>Weight:</span> {character.weight} lbs</h3>
          <h3><span>Height:</span> {convertHeight(character.height)} {unit}</h3>
          <h3><span>Type:</span> {character.types.map(type => type.type.name).join(', ')}</h3>
          <button onClick={getRandomPokemon}>Get random Pokémon</button>
          <div>
            <label>
              Height unit:{' '}
              <select value={unit} onChange={(event) => setUnit(event.target.value)}>
                <option value="m">m</option>
                <option value="dm">dm</option>
                <option value="cm">cm</option>
              </select>
            </label>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Character;
