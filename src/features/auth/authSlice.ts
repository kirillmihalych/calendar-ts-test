import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './types'

const initialState: AuthState = {
  auth: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state: AuthState) {
      state.auth = !state.auth
    },
  },
})

export const authReducer = authSlice.reducer
