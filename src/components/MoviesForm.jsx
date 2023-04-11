import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { createMovieThunk } from '../store/slices/movies.slice';

const MoviesForm = () => {

    const dispatch = useDispatch()

    const { handleSubmit, register} = useForm()

    const submit = (data) => {
        dispatch( createMovieThunk(data))
       }

    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit(submit)}>
                <h2>crear una nueva pelicula</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="ej. Matrix"
                    {...register('name')}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGenre">
                    <Form.Label>Genero</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="ej. fantasia"
                    {...register('genre')}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDuration">
                    <Form.Label>Duracion</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="ej. 2h 30m" 
                    {...register('duration')}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGenre">
                    <Form.Label>Fecha de Estreno</Form.Label>
                    <Form.Control 
                    type="date" 
                    placeholder="ej. 1996/12/31" 
                    {...register('release_date')}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default MoviesForm;