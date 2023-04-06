import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loader from "./components/Loader";

function App() {  

  // true && false -> false

  // && -> operacion de cortocircuito
  // va a devolver el prier dato que sea falsy.
  // en caso de que ninguno sea falsy, va a devolver el ultimo
  // 100 && null -> null
  // undefined && 'hola mundo' -> undefined
  // 100 && 200 -> 200
  /*
  console.log( 100 && null );
  console.log( undefined && 'hola mundo!');
  console.log( 100 && 200 );
  */

  // renderizados condicionales
  // funcional
      // if - else

      // visual 
        //ternarios 
        //
/*
      if( 200 === 200){
        return (
          <div className="App">
            <h1>la condicion se cumple</h1>
          </div> 
        );
      }else {

        
          return (
              <div className="App">
                <h1>la condicion no se cumple</h1>
              </div> 
            );
      }
 */     
      const [isVisible, setIsVisible] = useState(true)
      const [isLoading, setIsLoading] = useState(true)

      useEffect (() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000);
        
        
      }, []);
      
      return (
        <div className="App">
          {
            isLoading &&  <Loader/>
          }
          {
            isVisible ? <h1>se cumple</h1> : <h1>no se cumple</h1>
          }
          {
            //false && jsx  -> false
            // true && jsx -> true
            isVisible && <h1>este jsx es visible</h1>
          }

          <button onClick={ () => setIsVisible(!isVisible)}>mostrar y ocultar</button>
          <Country/>
         
          
        </div> 
      );
  }

export default App;
