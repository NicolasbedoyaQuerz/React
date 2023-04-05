import "./App.css";
import Button from "./components/Button";
import CardSong from "./components/CardSong";

function App() {
  /*
  function addNumbers(a, b){
    return a + b
  }

  addNumber( 5, 10 )
  addNuumber( 100, 200 )
*/
  return (
    <div className="App">
      <h1> {100 + 100} </h1>
      <Button propiedad="Este es el valor de la propiedad" texto="Cancelar" />
      <Button texto="Aceptar" />
      <Button texto="Iniciar sesión" />

      <CardSong
        title="Storytime"
        album="Imaginaerum"
        band="Nightwish"
        release="2011"
        genre="Metal sinfonico"
      />
      <CardSong
        title="Flight of Icarus"
        album="Piece of mind"
        band="Iron Maiden"
        release="1983"
        genre="Heavy Metal"
      />
    </div>
  );
}

export default App;
 
