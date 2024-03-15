// app/store.js
import { configureStore } from "@reduxjs/toolkit"
import smsDataReducer from "./features/smsData/smsDataSlice"

export const store = configureStore({
  reducer: {
    smsData: smsDataReducer,
  },
})
