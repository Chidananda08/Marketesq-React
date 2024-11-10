// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './features/orderSlice';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
