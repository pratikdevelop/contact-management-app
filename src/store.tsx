import { configureStore } from '@reduxjs/toolkit'
import  toggleSliceReducer  from './featueres/ToggleSice'
import  ContactSliceReducer  from './featueres/contactSlice'

export const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer,
    contact: ContactSliceReducer  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch