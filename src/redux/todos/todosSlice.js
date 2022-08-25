import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:'todos',
    initialState:{
        items: [
            {
                id:1,
                title: 'Example todo' ,
                isCompleted : false 
            },
        
        ],
        isActive: 'all',
    },
    
    reducers:{
        addTodo: (state,action) => {
            state.items.push(action.payload)
        },
        toggle: (state,action) => {
            const {id} = action.payload
            const item = state.items.find(item => item.id === id)
            item.isCompleted = !item.isCompleted
        },
        destroy: (state,action) => {
            const id = action.payload
            const filtered = state.items.filter(item=> item.id !== id)
            state.items = filtered
        },
        changeActiveFilter: (state,action) =>{
            state.isActive = action.payload ;
        },
        destroyCompleted: (state) => {
            
            const filtered = state.items.filter(item=> item.isCompleted===false)
            
            state.items = filtered
        },
        
    }
})

export const { addTodo,toggle,destroy,changeActiveFilter,destroyCompleted } = todosSlice.actions;
export default todosSlice.reducer ;