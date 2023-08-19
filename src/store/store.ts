import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../slice/rootSlice'

export const store = configureStore({
  reducer
})