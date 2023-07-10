import { createSlice } from '@reduxjs/toolkit'
import InitProductState from '../init_state/product.json';

export const newProductSlice = createSlice({
  name: 'new_product',
  initialState: {
    ...InitProductState
  },
  reducers: {
    updateProductInfo: (state, action) => {
      const {name,value} = action.payload;
      state[name] = value
    },
    uploadImages: (state, action) => {
      console.log("Images", action.payload);
      state.images = [...state.images, action.payload]
    },
  },
})

export const { 
  uploadImages,
  updateProductInfo
} = newProductSlice.actions;

export default newProductSlice.reducer
