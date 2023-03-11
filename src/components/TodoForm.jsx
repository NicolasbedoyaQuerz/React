import React from "react";
import { useForm } from "react-hook-form";

const ToDoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    resetForm();
  };

  const resetForm = () => {
    reset({
      title: "",
      description: "",
      isCompleted: false,
    });
  };

  const handleReset = () => {
    resetForm();
  };

  const handleFillForm = () => {
    reset({
      title: "Título de ejemplo",
      description: "Descripción de ejemplo",
      isCompleted: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "0.5px solid black",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <div>
        <h1>Nueva Tarea</h1>
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" {...register("title", { required: true })} />
        {errors.title?.type === "required" && (
          <p role="alert">El título es obligatorio</p>
        )}
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea id="description" {...register("description", { required: true })} />
        {errors.description?.type === "required" && (
          <p role="alert">La descripción es obligatoria</p>
        )}
      </div>
      <div>
        <label htmlFor="isCompleted">Completado</label>
        <input type="checkbox" id="isCompleted" {...register("isCompleted")} />
      </div>
      <div>
        <button type="button" onClick={handleFillForm}>
          Rellenar Formulario
        </button>
        <button type="button" onClick={handleReset}>
          Limpiar Formulario
        </button>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default ToDoForm;
