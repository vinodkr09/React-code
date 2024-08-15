// creating store

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// configurestore always take objects
export const store = configureStore({
    reducer: todoReducer

}) 


   