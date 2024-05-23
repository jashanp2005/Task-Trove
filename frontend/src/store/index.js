import { createSlice , configureStore} from '@reduxjs/toolkit'

const initialState = {
  user: "",
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer,
});