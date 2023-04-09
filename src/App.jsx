import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoForm from "./components/TodoForm";
import UsersList from "./components/UsersList";

function App() {

  const [ users, setUsers] = useState([{
    title: "Estudiar React",
    description: "Estudiar useState y useEffect",
    isCompleted: 'false',
    id: 1
  },
  {
    title: "Entregable 3",
    description: "Completar el entregable 3 y subirlo al classcenter",
    isCompleted: 'false',
    id: 2
  }])

  const [ userUpdate, setUserUpdate] = useState(null)

  const addUser = (userData) => {
    setUsers ([...users, userData])
  }

  const deleteUser = (idUser) => {
    alert(idUser)

    const filteredUsers = users.filter( user => user.id !== idUser )

    setUsers(filteredUsers)
  }

  const selectUser = (userData) => {
    setUserUpdate(userData)
  }

  const userActualization = (userData) => {
    console.log(userData);

    const index = users.findIndex(user => user.id === userData.id)

    users[index] = userData

    setUsers([...users])

    setUserUpdate(null)
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
