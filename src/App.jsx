
import "./App.css";
import axios from 'axios'
import BreakingBad from "./components/BreakingBad";
import Emoji from "./components/Emoji";

function App() {  
    
/*

//axios devuelve la respuesta del servidor en formato de promesa
// data es opcional(post, put, patch)
axios.metodoHTTP('url', data)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))


  promesa => es algo que en algun momento lo voy a recibir pero no en el momento sino en el futuro
  objeto que representa la terminacion o fracaso de una operacion asincrona

  - pendiente (seguimos esperando la resolucion)
  - settled (ya sabemos que ocurrio con la promesa)
  - fulfill (se resolvio con exito)
  - rejected (no se resolvio con exito)
  
  asincronia => desfases temporales

  .then y .catch (metodos de promesas)

  const funtionpromesa = new Promesa( (resolve, reject) => {
    //codigo de la promesa
   if(CondicionQueDemuestraSiLaPromesaSeCumpleONo){
     //si la promesa se cumple
     resolve('valor que se devuelve de la promesa al cumplirse')
   }else {
     //si la promesa no se cumple
     reject('error que no permitio o que hizo la promesa fallara')
   }
  } )

  
  Promesa
    .then((res) => {
      console.log(res); //valor que se devuleve de la promesa al cumplirse
    })
    .catch((error) => {
      //el catch se ejecuta cuando la promesa es rechazada
      console.log(error);// error qeu hizo que la promesa fallara
    })
  */ 



 return (
    <div className="App">
      <BreakingBad/>
      <Emoji/>
    </div>
  );
}

export default App;
