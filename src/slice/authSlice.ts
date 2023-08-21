import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => { state.token = action.payload },
    setLoggedIn: (state, action) => { state.isLoggedIn = action.payload },
  },
})


export const token = (state: any) => state.token

export const { setToken, setLoggedIn } = authSlice.actions

export default authSlice.reducer;