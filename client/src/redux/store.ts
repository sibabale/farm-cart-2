import { configureStore } from '@reduxjs/toolkit';
import newProductReducer from '../redux/products/new/product.slice';
import selectedProductReducer from '../redux/products/selected/product.slice';
import listingStepsReducer from '../redux/forms/listing/steps/steps.slice';

const store =  configureStore({
  reducer: {
    new_product: newProductReducer,
    listing_steps: listingStepsReducer,
    selected_product: selectedProductReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;