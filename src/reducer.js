const initState = {
    todos: [
        { id: 205, text: "Get a Job" },
        { id: 6453, text: "Get a place!" }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Adding todo", action.payload.todo)
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            }
        case "DELETE_TODO":
            console.log("Deleting todo ", action.payload.id)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state;

    }
}

export default reducer;