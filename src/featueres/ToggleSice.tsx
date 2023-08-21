import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface toggleModel {
  isOpen: boolean
}

const initialState: toggleModel = {
  isOpen: false
}

export const ToggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleModel: (state) => {
      state.isOpen = !state.isOpen;
      
    }
  },
})


// Action creators are generated for each case reducer function
export const  {toggleModel} = ToggleSlice.actions

export default ToggleSlice.reducer