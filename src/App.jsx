import "./App.css";
import react from './assets/react.svg'
import UserCard from "./components/UserCard";
import users from './data/users.json'
import {useState} from 'react'
function App() {  
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
  const [ index, setIndex ] = useState(0)
  const changeUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setIndex(randomIndex);
  }
  //   if (index === (users.length -1)) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // }
  
  return (
    <div className="App" style={{backgroundColor: colors[index]}}>
      {/* <img src="./vite.svg" /> 
      <img src={react} />*/}

      <UserCard
      userData = {users[index]}
      />
      
      <button onClick={changeUser}><i class='bx bx-shuffle' ></i></button>
    </div>
  );
}

export default App;
