import "./App.css";
import axios from "axios";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import IdCharacter from "./pages/IdCharacter";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

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
         path="/Login"
         element = {<Login/>}
         />
          {/* rutas protegidas */}
          <Route
          element = {<ProtectedRoutes/>}
          >
          <Route
          element = {<MainLayout/>}
          >
          <Route
          path="/Characters"
          element= {<Characters/>}
            />
          <Route
          path="/Characters/:id"
          element= {<IdCharacter/>}
          />
          </Route>
          </Route>
        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
