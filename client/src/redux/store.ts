import { configureStore } from '@reduxjs/toolkit';
import newProductReducer from '../redux/products/product.slice';
import listingStepsReducer from '../redux/forms/listing/steps/steps.slice';

const store =  configureStore({
  reducer: {
    new_product: newProductReducer,
    listing_steps: listingStepsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;