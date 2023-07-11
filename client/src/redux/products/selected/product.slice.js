import { createSlice } from '@reduxjs/toolkit'
import InitProductState from '../../init_state/product.json';

export const selectedProductSlice = createSlice({
  name: 'selected_product',
  initialState: {
    ...InitProductState
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      return {
        ...action.payload
      }
    },
  },
})

export const { 
  setSelectedProduct
} = selectedProductSlice.actions;

export default selectedProductSlice.reducer
