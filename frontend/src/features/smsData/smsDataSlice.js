import { configureSlice, createSlice } from '@reduxjs/toolkit'

export const smsDataSlice = createSlice({
    name: 'smsData',
    initialState: {
        list: []
    },
    reducers: {
        addData: (state, action) => {
            state.list.push(action.payload)
        }
    }
})