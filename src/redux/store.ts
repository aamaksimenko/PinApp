import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pinSlice from './pinSlice'

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, pinSlice);

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch