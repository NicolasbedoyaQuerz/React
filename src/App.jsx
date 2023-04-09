import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Tecnologias from "./pages/Tecnologias";
import FooterComponent from "./components/FooterComponent";
import { Link } from "react-router-dom";

function App() {  
  
  
  return (
    <HashRouter>
    <div className="App">
      <ul>
        <li>
          <p><Link to = '/'>  Home</Link></p>
        </li>
        <li>
          <p><Link to = '/Proyectos'>Proyectos</Link></p>
        </li>
        <li>
          <p><Link to = '/Tecnologias'> Tecnologias </Link></p>
        </li>
      </ul>
      <Routes>
        <Route
        path="/"
        element = {<Home/>}
        />
       <Route
        path="/Proyectos"
        element = {<Proyectos/>}
        />
        <Route
        path="/Tecnologias"
        element = {<Tecnologias/>}
        />
      </Routes>
      <FooterComponent/>
    </div>
    </HashRouter>
  );
}

export default App;
