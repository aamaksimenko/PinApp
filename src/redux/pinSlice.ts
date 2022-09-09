import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface PinState {
  savedPin: string
  isFirstLogin: boolean
  isErrorPin: boolean
  isLogin: boolean
}

const initialState: PinState = {
  savedPin: '',
  isFirstLogin: true,
  isErrorPin: false,
  isLogin: false,
}

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    checkSavePin: (state) => {
      state.isFirstLogin = false;
    },
    savePin: (state, action: PayloadAction<string>) => {
      state.savedPin = action.payload;
      state.isFirstLogin = false;
    },
    setIsErrorPin: (state, action: PayloadAction<boolean>) => {
      state.isErrorPin = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    }
  },
})

export const selectorIsFirstLogin = (state: RootState) => state.isFirstLogin;
export const selectorSavedPin = (state: RootState) => state.savedPin;
export const selectorIsErrorPin = (state: RootState) => state.isErrorPin;
export const selectorIsLogin = (state: RootState) => state.isLogin;

export const { checkSavePin, savePin, setIsErrorPin, setIsLogin } = pinSlice.actions

export default pinSlice.reducer