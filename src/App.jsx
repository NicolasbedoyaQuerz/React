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


  const addUser = (userData) => {
    setUsers ([...users, userData])
  }

  const deleteUser = (idUser) => {
    alert(idUser)

    const filteredUsers = users.filter( user => user.id !== idUser )

    setUsers(filteredUsers)
  }

  return (
    <div className="App">
      <TodoForm
      createUser={(data) => addUser(data)}
      />
      <UsersList
      usersData = {users}
      deleteUserAction = { id => deleteUser(id)}
      />
      {/* <Form/> */}
    </div>
  );
}

export default App;
