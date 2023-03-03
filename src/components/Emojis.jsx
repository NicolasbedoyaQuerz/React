import axios from "axios";
import { useState, useEffect } from "react";

const Emoji = () => {
  const [currentEmoji, setCurrentEmoji] = useState({ name: "", emoji: "" });

  useEffect(() => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((resp) => {
        setCurrentEmoji({ name: resp.data.results[0].name, emoji: resp.data.results[0].emoji });
      })
      .catch((error) => console.error(error));
  }, []);

  const handleButtonClick = () => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((resp) => {
        setCurrentEmoji({ name: resp.data.results[0].name, emoji: resp.data.results[0].emoji });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <p>Name: {currentEmoji.name}</p>
      <p>Emoji: {currentEmoji.emoji}</p>
      <button onClick={handleButtonClick}>Mostrar otro emoji</button>
    </div>
  );
};

export default Emoji;
