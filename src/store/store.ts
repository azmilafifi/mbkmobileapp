import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
import formReducer from '../slice/formslice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;