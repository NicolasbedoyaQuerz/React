import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UsersList from './components/UsersList'

function App() {

  const [ users, setUsers ] = useState([{
    email: 'john@gmail.com',
    password: 'john1234',
    frist_name:'john',
    last_name:'doe',
    birthday: '1993-10-10',
    id: 1
  }])

  const addUser = userData => {
    setUsers([...users, userData])
  }

  return (
    <div className="App">
      <Form 
      createUser ={ data => addUser(data)}
      />
      <UsersList 
      usersData = {users}
      />
    </div>
  );
}

export default App;
