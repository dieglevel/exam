import { configureStore } from '@reduxjs/toolkit'
import  productsStore  from './reduxs/productsStotre';

export const store = configureStore({
   reducer: {
      products: productsStore,
   },
});

export type RootState = ReturnType<
     typeof store.getState
>;
export type AppDispatch = typeof store.dispatch;

export default store;