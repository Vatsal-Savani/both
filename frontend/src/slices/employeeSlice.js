import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userRole: 1,
}

export const employeeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLogin: (state) => {
            state.isAuthenticated = true;
        },
        setLogout: (state) => {
            state.isAuthenticated = false;
        },
        setUserRole: (state, action) => {
            state.userRole = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLogin, setLogout, setUserRole } = employeeSlice.actions

export default employeeSlice.reducer