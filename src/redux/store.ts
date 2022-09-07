import { configureStore } from '@reduxjs/toolkit'

import pinSlice from './pinSlice'

export const store = configureStore({
  reducer: {
    pin: pinSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch