import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Get All Users

export const getAllUsers = createAsyncThunk(
    'getAllUsers',
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://647de4bfaf984710854a8eb0.mockapi.io/users')
            const result = await response.json()
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


// Create Action 

export const createUser = createAsyncThunk(
    'createUser',
    async (data, { rejectWithValue }) => {
        console.log(data)
        const res = await fetch('https://647de4bfaf984710854a8eb0.mockapi.io/users', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(data)
        })
        try {
            const result = await res.json()
            toast.success('User Created')
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Edit Action

export const editUser = createAsyncThunk(
    'editUser',
    async ({id, values}, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://647de4bfaf984710854a8eb0.mockapi.io/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(values)
            })
            const result = await res.json()
            // console.log(result);
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Delete Action

export const deleteUser = createAsyncThunk(
    'deleteUser',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://647de4bfaf984710854a8eb0.mockapi.io/users/${id}`, {
                method: 'DELETE',
            })
            const result = await response.json()
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const initialState = {
    users: [],
    loading: true,
    error: null
}

const userDetail = createSlice({
    name: 'userDetail',
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [editUser.pending]: (state) => {
            state.loading = true
        },
        [editUser.fulfilled]: (state, action) => {
            state.loading = false
            const { id } = action.payload
            const index = state.users.findIndex(user => user.id === id)
            if(index !== -1) {
                state.users[index] = { ...state.users[index], ...action.payload}
            }
            toast.success('User Updated')
        },
        [editUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false
            const { id } = action.payload
            if (id) {
                state.users = state.users.filter(user => user.id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default userDetail.reducer