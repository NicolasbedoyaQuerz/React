import "./App.css";
import axios from "axios";
import BreakingBad from "./components/BreakingBad";
import Emojis from "./components/Emojis";

function App() {  
  

 /*
  //Axios devuelve la rspuesta del servidor en formato de promesa
  
  //data es opcional (post, put, patch)
  
  axios.metodoHTTP( 'url', data ) 
    .then( (resp) => console.log(resp) )
    .catch( (error) => console.log(error) )
  
  
  */

  //PROMESAS: Objeto que representa la terminacion o fracaso de una operacion asincrona
  //  -Pendiente : Seguimos esperando la resolucion
  //  -Settled : Ya sabemos que ocurrio con la promesa
  //      -Fulfill : Resolvio con exito
  //      -Rejected : Resolvio si exito, falló
  //ASINCRONIA: Desfases temporales


  // .then() y .catch() (Metodos de promesas)
 
  /*
  const functionPromisa = new Promise( (resolve, reject) => {
    //Codigo de la promesa

    if(condicionQueDecidiraSiLaPromesaSeCumpleONo){
      //Si se cumple
      resolve("Valor que se devuelve de la promesa al cumplirse")
    }else{
      //No se cumple, es rechazada
      reject( "Error que hizo que la promesa fallara" )
    }

  } )
  */
  
  /*
  promesa
    .then( (res) => {
      //El then se ejecuta cuando la promesa es resuelta con exito
      console.log(resp) // "Valor que se devuelve de la promesa al cumplirse"
    })
    .catch( (error) => {
      //El catch se ejecuta cuando la promesa es rechazada
      console.log(error) //"Error que hizo que la promesa fallara"
    } )
  */

  return (
    <div className="App">
      <BreakingBad/>
      <Emojis/>
    </div>
  );
}

export default App;
