import { useForm } from "react-hook-form";

const TodoForm = ({createUser}) => {

    const {register, formState:{errors}, reset, handleSubmit} = useForm()

    const submit = (data) => {
        data.id = Date.now()
        // console.log(data);

        createUser(data)
        emptyForm()
    }

    const fillForm = () => {
        reset(
            {
                title: 'hola mundo!',
                description: 'hola mundooooo!',
                isCompleted: (true)
            }
        )
    }

    const emptyForm = () => {
        reset(
            {
                title: '',
                description: '',
                isCompleted: (false)
            }
        )
    }

    return (
        <div className="card">
        <form onSubmit={handleSubmit(submit)} >
            <h1>NUEVA TAREA</h1>
            <div>
                <label htmlFor="title"> Titulo</label>
                <input
                type="text" 
                name="title" 
                id="title" 
                placeholder="something"
                {...register('title', {required: true})}
                />
                {errors.title?.type === 'required' && <p role="alert"  style={{ color: 'tomato' }}>se requiere un titulo</p>}

            </div>
            <div>
                <label htmlFor="description"> Descripcion </label>
                <input
                type="text" 
                name="description" 
                id="description" 
                placeholder="escribe aqui"
                size={30}
                style={{ width: "300px", height:'100px' }}
                {...register('description', {required: true})}
                />
                 {errors.description?.type === 'required' && <p role="alert"  style={{ color: 'tomato' }}>se requiere una Descripcion</p>}
            </div>
            <div>
                <label htmlFor="isCompleted"> Completado </label>
                <input
                type="checkbox" 
                name="isCompleted" 
                id="isCompleted" 
                {...register('isCompleted', {required: true})}    
                />
                 {errors.isCompleted?.type === 'required' && <p role="alert"  style={{ color: 'tomato' }}>se requiere este campo </p>}
            </div>
            <button type="submit"> Enviar Formulario </button>
        {/* <button  onClick={emptyForm}> Borrar Formulario </button> */}
        </form>
        <button onClick={fillForm}> llenar Formulario</button>.
        </div>
    );
};

export default TodoForm;