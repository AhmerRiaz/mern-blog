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
        },
        userDeleteStart: (state) => {
            state.loading = true
            state.error = null
        },
        userDeleteSuccess: (state, action) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        userDeleteFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userSignOutStart: (state) => {
            state.loading = true
            state.error = null
        },
        userSignOutSuccess: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        userSignOutFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        } 

    }
})

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure,
    userUpdateStart,
    userUpdateSuccess,
    userUpdateFailure,
    userDeleteStart,
    userDeleteSuccess,
    userDeleteFailure, 
    userSignOutStart,
    userSignOutSuccess,
    userSignOutFailure } = userSlice.actions

export default userSlice.reducer