import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter.slices'
import username from   './slices/username.slice'

export default configureStore({
  reducer: {
    counter,
    username
	}
})