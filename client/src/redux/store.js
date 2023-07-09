import { configureStore } from '@reduxjs/toolkit';
import newProductReducer from '../redux/products/product.slice';

export default configureStore({
  reducer: {
    new_product: newProductReducer,
  },
});
