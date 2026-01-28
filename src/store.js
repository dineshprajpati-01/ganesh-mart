import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/slice/counterSlice'
export default configureStore({
  reducer: {
    counter : counterReducer,
  },
})