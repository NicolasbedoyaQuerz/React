import "./App.css";
import { useState, useEffect } from "react";
import Country from './components/Country'
import Loader from './components/Loader'

function App() {  
 /* 
  if(100 === 100){
  return (
    <div className="App">
      <h1>la condicion se cumple</h1>
    </div>
  );
  } else {
    return (
      <div className="App">
        <h1>la condicion No se cumple</h1>
      </div>
    );
  }*/

  // const [isVisible, setIsVisible] = useState(true)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  },[])

  return (
  /*  <div className="App">
      {
        100 === 100 ? <h1>se cumple</h1> : <h1>no se cumple</h1>
      }
      {
        // 'hola mundo!'
        isVisible && <h1>este jx es visible</h1>
      }
      <button onClick={ () => setIsVisible(!isVisible)}>mostar / ocultar</button>
    </div>*/

      <div className="App">
        { isLoading && <Loader/>}
        <Country name="colombia" />
      </div>
    );
  }

export default App;
