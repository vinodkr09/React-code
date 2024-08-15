// creating slice using Reducers
// payload is the data that you want to pass along with an action to your reducer. This data can be anything you need to update your state, like new item addeed to list.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),    // nanoid generates a unique a ID.
                text: action.payload  
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
             todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer