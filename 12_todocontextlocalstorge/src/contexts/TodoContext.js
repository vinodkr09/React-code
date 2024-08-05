import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},    // functionality ka defination yahan nahi likhana hai, app.jsx me likhna hai
    updateTodo: (id, todo) => {},  // functionality ka defination yahan nahi likhana hai, app.jsx me likhna hai
    deleteTodo: (id) => {},    // functionality ka defination yahan nahi likhana hai, app.jsx me likhna hai
    toggleComplete: (id) => {}  // functionality ka defination yahan nahi likhana hai, app.jsx me likhna hai
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider