import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading:false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userUpdateStart: (state) => {
            state.loading = true
            state.error = null
        },
        userUpdateSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        userUpdateFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, userUpdateStart, userUpdateSuccess, userUpdateFailure } = userSlice.actions

export default userSlice.reducer