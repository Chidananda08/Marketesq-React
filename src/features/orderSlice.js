import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  rooms: 1,
  totalPrice: 0,
  isSubmitted: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      return { ...state, ...action.payload };
    },
    submitOrder: (state) => {
      state.isSubmitted = true;
    },
  },
});

export const { updateOrder, submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
