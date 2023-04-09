import "./App.css";
import axios from "axios";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {  
  
  return (
    <HashRouter>
    <div className="App">
        <Routes>
          <Route
          path="/"
          element= {<Home/>}
          />
          <Route
          path="/Characters"
          element= {<Characters/>}
          />
        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
