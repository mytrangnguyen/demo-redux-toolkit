import {createSlice} from '@reactjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo(state, action){
            const {id, task} = action.payload;
            state.push({id, task, isComplete: false})
        },
        toggleTodo(state,action){
            const todo = state.find((todo)=>todo.id==action.payload)
            if(todo){
                todo.isComplete = !todo.isComplete;
            }
        }
    }
})

export const {addTodo, toggleTodo} = todosSlice.action
export default todosSlice.reducer
