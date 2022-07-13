import { createSlice} from "@reduxjs/toolkit";

interface User {
    list: []
}

const initialState: User = {
    list: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserList(state, action){
            state.list = action.payload
        }
    }
})

export const getUsers = () => async(dispatch: any, getState: any) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const users = await response.json()

    dispatch(setUserList(users))
}

export const {setUserList} = userSlice.actions
export default userSlice.reducer
