import { createSlice } from '@reduxjs/toolkit'

export const listingStepsSlice = createSlice({

  name: 'listing_steps',
  initialState: {
    active_step: 0
  },
  
  reducers: {
    stepForward: (state) => {
      state.active_step++
    },
    stepBackward: (state) => {
      if (state.active_step >= 0) {
        state.active_step--
      }
    },
  },
})

export const { 
  stepForward,
  stepBackward
} = listingStepsSlice.actions;

export default listingStepsSlice.reducer
