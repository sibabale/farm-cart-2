import { createSlice } from '@reduxjs/toolkit'
import animals from '../../../data/animals.json';

export const allProductsSlice = createSlice({
  name: 'products',
  initialState: animals,
  reducers: {
    
  },
})

export default allProductsSlice.reducer
