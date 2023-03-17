import { useState } from 'react';
import Form from './Form';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      title: "Estudiar React",
      description: "Estudiar useState y useEffect",
      isCompleted: false,
      id: 1
    },
    {
      title: "Entregable 3",
      description: "Completar el entregable 3 y subirlo al classcenter",
      isCompleted: false,
      id: 2
    }
  ]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Form createTodo={createTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
