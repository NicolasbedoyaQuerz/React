import "./App.css";
import MoviesForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {  

  const isLoading = useSelector(state => state.isLoading)


  
  return (
    <div className="App">
      {
        isLoading && <Loader/>
      }
      <MoviesForm/>
      <MoviesList/>
    </div>
  );
}

export default App;
