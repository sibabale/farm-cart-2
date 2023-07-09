// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.new_product.value
export const selectSubCategory = (state) => state.new_product.sub_category;
export const selectMainCategory = (state) => state.new_product.main_category;

