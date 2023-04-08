import { useForm } from "react-hook-form";


const Form = () => {

    const {register, handleSubmit} = useForm()

    const submit = data => {
        console.log(data);
    }

  
    return (
        <form onSubmit={handleSubmit( submit )}>
            <div>
                <label htmlFor="username"> Nombre de Usuario </label>
                <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="UserName"
                {...register('username')}
                />
            </div>
            <div>
                <label htmlFor="password"> Contraseña </label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Eje.. 1234"
                {...register('password')}
                />
            </div>
            <button type="submit"> Iniciar Sesion </button>
        </form>
    );
};

export default Form;