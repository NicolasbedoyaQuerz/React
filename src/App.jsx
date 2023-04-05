import "./App.css";
import Character from "./components/Character";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {  

  const [ characterData, setCharacterData] = useState({})
  const [ randomPokemon, setRandomPokemon] = useState( 1 )

  useEffect(() => {

    axios 
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
      .then(resp => setCharacterData(resp.data))
      .catch(error => console.log(error.data))
  }, [randomPokemon])


  const generateRandomNumber = () => {
    const numberRandom = Math.floor(Math.random(1) * 800)
    setRandomPokemon(numberRandom)
  }


  
  return (
    <div className="App">
      <Character
      data = { characterData }
      />
       <button onClick={generateRandomNumber}>Change Pokemon</button>
    </div>
  );
};
export default App;
