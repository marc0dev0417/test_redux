import { configureStore } from "@reduxjs/toolkit";
//reducers =>
import counterReducer from '../features/counter/counter_slice'
import usersReducer from '../features/users/user_slice'


export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        userStore: usersReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>