const initState = {
    todos: [
        { id: 205, text: "Get a Job" },
        { id: 6453, text: "Get a place!" }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Adding todo")
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            }
        case "DELETE_TODO":
            console.log("Deleting todo")
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todo.id)
            }
        default:
            return state;

    }
}

export default reducer;