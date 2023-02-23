import './App.css'
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  const incrementLike = () => {
    setCounter(counter + 1);
  };

  const decrementLike = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <h1>Total de likes: {counter} </h1>
      <button onClick={incrementLike}>Like</button>
      <button onClick={decrementLike}>Dislike</button>
    </div>
  );
}

export default App;
