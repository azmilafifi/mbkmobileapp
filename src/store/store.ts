import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;