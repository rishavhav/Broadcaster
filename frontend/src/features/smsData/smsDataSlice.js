import { createSlice } from "@reduxjs/toolkit"

const smsDataSlice = createSlice({
  name: "smsData",
  initialState: {
    list: [],
  },
  reducers: {
    addData: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export default smsDataSlice.reducer
export const { addData } = smsDataSlice.actions
