import { configureStore } from '@reduxjs/toolkit'
import movies from './slices/movies.slice'
import isLoading from './slices/isLoading.slice'

export default configureStore({
  reducer: {
    movies,
    isLoading
	}
})