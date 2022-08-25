import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState : {
        value: 0,
    },
    reducers :{
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        } ,
        increasebyAmount: (state , action) => {
            state.value += parseInt(action.payload)
        }
    },
});

export const { increase,decrease,increasebyAmount } = counterSlice.actions ;
export default counterSlice.reducer ;
