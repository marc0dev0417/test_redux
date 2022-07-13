import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getValue } from "@testing-library/user-event/dist/utils";
/**
 * //DUCKS pattern =>
 * Ducks is a way to moduliraze parts of an redux's application joining reducers, actions types and actions creators toguether of a easy way to undertand and import 
 * */

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //it's okay to do this because inner makes it immutable
        //under the hood

        //increment
        incremented(state){
           state.value++
        },
        //decrement
        decremented(state){
           state.value--
        },
        //ammount
        ammountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        },
        //reset
        reset(state){
            state.value = 0
        }
    }
})




export const {incremented, decremented , ammountAdded, reset} = counterSlice.actions
export default counterSlice.reducer