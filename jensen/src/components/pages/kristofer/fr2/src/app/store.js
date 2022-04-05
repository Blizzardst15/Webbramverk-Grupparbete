import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import skolaReducer from '../features/skolor/skolaSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    skolor: skolaReducer,
  },
})
