// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { smsDataSlice } from './features/smsData/smsDataSlice';

export const store = configureStore({
    reducer: {
        smsData: smsDataSlice.reducer,
    },
});
