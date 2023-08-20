import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoggedIn: false,
    test: 'lol'
  },
  reducers: {
    setToken: (state, action) => { state.token = action.payload },
    setLoggedIn: (state, action) => { state.isLoggedIn = action.payload },
  }
})


export const atoken = (state: any) => state.token

export const { setToken, setLoggedIn } = authSlice.actions

export default authSlice.reducer;