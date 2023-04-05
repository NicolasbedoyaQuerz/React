import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {  
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [count, setCount] = useState(100)

  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
  const decrement = () => {
    // console.log('click');
    setCount(count - 5)
  }

  const togglePasswordVisiblity = () => {

    setPasswordShown(!isPasswordShown);
  };
  
  const toggleisVisible = () => {

    setIsVisible(!isVisible);
  };

  useEffect(() => {
    console.log('se ejecuto');
  }, [isPasswordShown])

  return (
    <div className="App"  style={{backgroundColor:colors[ Math.floor(Math.random() * colors.length)]}}>
      <Title text={value}></Title>
      <label htmlFor="password">Contraseña</label>
      <input 
        id="password"
        type={isVisible ? "text" : "password"} 
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={toggleisVisible}>
        {isPasswordShown ? "Ocultar" : "Mostrar"}
      </button>

      <h1> {count} </h1>
      <button onClick={decrement}>Quitar 5</button>
    </div>
  );
}

export default App;
