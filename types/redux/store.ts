import { configureStore } from '@reduxjs/toolkit'
import todoRedux from './reduxs/todoRedux';

export const store = configureStore({
    reducer: {
        todo: todoRedux,
    }
})

export type RootState = ReturnType<
     typeof store.getState
>;
export type AppDispatch = typeof store.dispatch;

export default store;