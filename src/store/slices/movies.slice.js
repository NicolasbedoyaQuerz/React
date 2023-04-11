import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const MoviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
       setMovies :  (state, action) => {
        return action.payload
       }
    }
});

export const  getMoviesThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios
        .get('https://movies-crud-2.academlo.tech/movies/')
        .then(resp => {
            dispatch(setMovies(resp.data))
           
        })
        .catch(error => console.error(error))
        .finally(() =>  dispatch(setIsLoading(false)))
        
}

export const createMovieThunk = (data) => dispatch => {
    dispatch(setIsLoading(true))
    axios
        .post('https://movies-crud-2.academlo.tech/movies/', data)
        .then(() => { dispatch(getMoviesThunk())})
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setMovies } = MoviesSlice.actions

export default MoviesSlice.reducer