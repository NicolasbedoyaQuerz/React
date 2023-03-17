import { useForm } from 'react-hook-form'

const Form = ({ createTodo }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = data => {
        data.id = Date.now()
        data.isCompleted = false
        createTodo(data)
        emptyForm()
    }

    const fillForm = () => {
        reset(
            {
                title: "Estudiar React",
                description: "Estudiar useState y useEffect",
                isCompleted: false,
                id: 1
            }
        )
    }

    const emptyForm = () => {
        reset(
            {
                title: "",
                description: "",
                isCompleted: false,
                id: ""
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" {...register("title", { required: true })} />
                    {errors.title?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>El título es requerido</p>}
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <input type="text" id="description" {...register("description", { required: true })} />
                    {errors.description?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>La descripción es requerida</p>}
                </div>
                <button type="submit">Agregar ToDo</button>
            </form>
            {/* <button onClick={fillForm}>Llenar formulario</button> */}
        </div>
    );
}

export default Form;
