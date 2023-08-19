import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => { state.token = action.payload },
    setLoggedIn: (state, action) => { state.isLoggedIn = action.payload },
  }
})

export const reducer = rootSlice.reducer;

export const token = (state: any) => state.token



export const { setToken,setLoggedIn } = rootSlice.actions