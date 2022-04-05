import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import skolaService from './skolaService'

const initialState = {
    skolor: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//skapa ny skola

export const createSkola = createAsyncThunk('skolor/skapa', async (skolData, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await skolaService.createSkola(skolData, token)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
     }
    }
)


export const getSkolor = createAsyncThunk('skolor/getAll', async (_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await skolaService.getSkolor(token)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message) 
    }
})

/*  export const getSkolor2 = createAsyncThunk('skolor/getAll', async (_,thunkAPI) => {
     try {
         return await skolaService.getSkolor()
     } catch (error) {
         const message =
         (error.response &&
           error.response.data &&
           error.response.data.message) ||
         error.message ||
         error.toString()
       return thunkAPI.rejectWithValue(message) 
     }
 }) */

//delete skola

export const deleteSkola = createAsyncThunk('skolor/delete', async (id, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await skolaService.deleteSkola(id, token)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        }
    }
)


export const skolaSlice = createSlice({
    name: 'skola',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createSkola.pending, (state) => {
             state.isLoading = true
        })
        .addCase(createSkola.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.skolor.push(action.payload)
        })
        .addCase(createSkola.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
            .addCase(getSkolor.pending, (state) => {
                 state.isLoading = true
            })
            .addCase(getSkolor.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.skolor = action.payload
            })
            .addCase(getSkolor.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteSkola.pending, (state) => {
                state.isLoading = true
           })
           .addCase(deleteSkola.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.skolor = state.skolor.filter(
                (skola) => skola._id !== action.payload.id
                )
           })
           .addCase(deleteSkola.rejected, (state, action) => {
               state.isLoading = false
               state.isError = true
               state.message = action.payload
           })
    },
})

export const {reset} = skolaSlice.actions
export default skolaSlice.reducer