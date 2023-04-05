import './App.css'
import Message from './components/Message'
import Foco from './components/Foco'
import { useState } from 'react'


function App() {


  const [ isVisible, setIsVisible] = useState(true)
/*
 const names = ['denis', 'vini', 'nico', 'erica']
  console.log(Math.floor(Math.random() * names.length));
*/

  const funcionDetonable = () => {
    setIsVisible(!isVisible)
  }


  return (
    <div className="App">
      <Message/>
      <Foco
      onTodos={isVisible}
      dataSalida={ funcionDetonable}
      />
      <Foco
      onTodos={isVisible}
      dataSalida={ funcionDetonable}
      />
      <Foco
      onTodos={isVisible}
      dataSalida={ funcionDetonable}
      />
    </div>
  )
}

export default App
