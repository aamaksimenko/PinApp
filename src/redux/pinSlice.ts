import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PinState {
  value: string
  isFirstLogin: boolean
}

const initialState: PinState = {
  value: '',
  isFirstLogin: true
}

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {

  },
})


export const actions = pinSlice.actions

export default pinSlice.reducer