import { createSlice } from '@reduxjs/toolkit'
import InitProductState from '../init_state/product.json';

export const counterSlice = createSlice({
  name: 'new_product',
  initialState: {
    ...InitProductState
  },
  reducers: {
    updateProductInfo: (state, action) => {
      const {name,value} = action.payload;
      state[name] = value
    },
  },
})

export const { 
  increment, 
  decrement, 
  incrementByAmount,
  updateProductInfo
} = counterSlice.actions;

export default counterSlice.reducer
