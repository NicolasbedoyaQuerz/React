import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMoviesThunk } from '../store/slices/movies.slice';




const MoviesList = () => {

    const movies =  useSelector( state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesThunk())
    }, []);

    return (
        <div>
            <Table striped bordered hover  variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Duracion</th>
                    <th> Fecha De Lanzamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.duration}</td>
                                <td>{movie.release_date}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MoviesList;