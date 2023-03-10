import React, { useState } from "react";

const ToDoForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: id,
      title: title,
      description: description,
      isCompleted: isCompleted,
    };
    console.log(todo);
  };


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleIsCompletedChange = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "0.5px solid black", padding: "20px", borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", width: "80%", margin: "0 auto" }}>
      <div>
        <h1>Nueva Tarea</h1>
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required/>
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
      </div>
      <div>
        <label htmlFor="isCompleted">Completado</label>
        <input type="checkbox" id="isCompleted" checked={isCompleted} onChange={handleIsCompletedChange} required/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ToDoForm;
