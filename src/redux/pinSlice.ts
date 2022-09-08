import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface PinState {
  savedPin: string
  isFirstLogin: boolean
  isErrorPin: boolean
}

const initialState: PinState = {
  savedPin: '',
  isFirstLogin: true,
  isErrorPin: false,
}

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    checkSavePin: (state, action: PayloadAction<string>) => {
      state.savedPin = action.payload;
      state.isFirstLogin = false;
    },
    savePin: (state, action: PayloadAction<string>) => {
      localStorage.setItem('pin', action.payload);
      state.savedPin = action.payload;
    },
    setIsErrorPin: (state, action: PayloadAction<boolean>) => {
      state.isErrorPin = action.payload;
    }
  },
})

export const selectorIsFirstLogin = (state: RootState) => state.pin.isFirstLogin;
export const selectorSavedPin = (state: RootState) => state.pin.savedPin;
export const selectorIsErrorPin = (state: RootState) => state.pin.isErrorPin;

export const { checkSavePin, savePin, setIsErrorPin } = pinSlice.actions

export default pinSlice.reducer