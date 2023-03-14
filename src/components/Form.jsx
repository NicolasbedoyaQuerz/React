import { useForm } from "react-hook-form"


const Form = () => {

    const { register, handleSubmit } = useForm()

    const submit = data =>{
        console.log(data);
    }

    return (
       <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="username">
                Nombre de usuario
            </label>
            <input type="text"
            id="username"
            placeholder="Escribe tu Nombre de Usuario"
            {...register('username')}
            />
        </div>
        <div>
            <label htmlFor="password">
                Contraseña
            </label>
            <input type="password"
            id="password"
            name="password"
            placeholder="Ej: 123"
            {...register('password')}
            />
        </div>
        <button type="submit">
            Iniciar sesion
        </button>
       </form>
    )
}

export default Form