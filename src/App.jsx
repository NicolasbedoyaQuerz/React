import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoForm from "./components/TodoForm";
import UsersList from "./components/UsersList";
import axios from "axios";

function App() {

  const [ users, setUsers] = useState([])
  const [ userUpdate, setUserUpdate] = useState(null)


  useEffect(() => {
   getData()
  }, [])

  const getData = () => {
    axios
    .get('https://todos-crud.academlo.tech/todos/') 
    .then(resp => setUsers(resp.data))
    .catch(error => console.error(error))
  }



  const addUser = (userData) => {
    axios 
      .post('https://todos-crud.academlo.tech/todos/', userData)
      .then( () => getData())
      .catch( error => console.error(error))
  }

  const deleteUser = (idUser) => {
    axios 
    .delete(`https://todos-crud.academlo.tech/todos/${idUser}/`)
    .then( () => getData())
    .catch( error => console.error(error))
  }

  const selectUser = (userData) => {
    setUserUpdate(userData)
  }

  const userActualization = (userData) => {
    axios 
    .put(`https://todos-crud.academlo.tech/todos/${userData.id}/`, userData)
    .then( () => { 
      getData()
      setUserUpdate(null)
    })

    .catch( error => console.error(error))
   
  }

  return (
    <div className="App">
      <TodoForm
      createUser={(data) => addUser(data)}
      selectedUser = {userUpdate}
      updateUser = { (data) => userActualization(data) }
      />
      <UsersList
      usersData = {users}
      deleteUserAction = { id => deleteUser(id)}
      selectUser = { (user) => selectUser(user)}
      />
      {/* <Form/> */}
    </div>
  );
}

export default App;
