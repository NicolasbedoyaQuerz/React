import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {  
  const [value, setValue] = useState('');
  const [isPasswordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!isPasswordShown);
  };

  return (
    <div className="App">
      <Title text={value}></Title>
      <label htmlFor="password">Contraseña</label>
      <input 
        id="password"
        type={isPasswordShown ? "text" : "password"} 
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={togglePasswordVisiblity}>
        {isPasswordShown ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}

export default App;
