const initState = {
    todos: [
        { id: 205, text: "Wash the Car", checked: false },
        { id: 6453, text: "Take out the trash", checked: false }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Adding todo", action.payload.todo)
            return {
                ...state,
                todos: [action.payload.todo, ...state.todos]
            }
        case "DELETE_TODO":
            console.log("Deleting todo ", action.payload.id)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case "UPDATE_TODO":
            console.log("Updating todo", action.payload.id)

            const newTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.checked = !todo.checked;
                }

                return todo;

            })

            newTodos.sort((a, b) => {
                if (a.checked && !b.checked) {
                    return 1;
                }
                else if (!a.checked && b.checked) {
                    return -1;
                }

                return 0;
            })

            console.log(newTodos);

            return {
                ...state,
                todos: newTodos
            }

        default:
            return state;

    }
}

export default reducer;