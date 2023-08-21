import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ContactInfo {
    firstName?: string;
    lastName?: string;
    email?: string,
    phone?: number,
    isActive?: string;
    id?:number;
}

const initialState: ContactInfo = {}

export const ContactSlice:any = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    setContactInfo: (state: ContactInfo, actions:PayloadAction<ContactInfo>) => {
      state = actions.payload;
        return state
    }
  },
})


// Action creators are generated for each case reducer function
export const  {setContactInfo} = ContactSlice.actions

export default ContactSlice.reducer;