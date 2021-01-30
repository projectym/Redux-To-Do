const initState = {
    todos: [
        { id: 205, text: "Wash the Car", checked: false },
        { id: 6453, text: "Take out the trash", checked: false }
    ]
}

function todoSort(a, b) {
    if (a.checked && !b.checked) {
        return 1;
    }
    else if (!a.checked && b.checked) {
        return -1;
    }

    return 0;
}

const reducer = (state = initState, action) => {

    let newTodos = []

    switch (action.type) {
        case "ADD_TODO":
            console.log("Adding todo", action.payload.todo)

            newTodos = [...state.todos, action.payload.todo].sort((a, b) => todoSort(a, b))

            return {
                ...state,
                todos: newTodos
            }

        case "DELETE_TODO":
            console.log("Deleting todo ", action.payload.id)
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }


        case "UPDATE_TODO":
            console.log("Updating todo", action.payload.id)

            newTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.checked = !todo.checked;
                }
                return todo;

            }).sort((a, b) => todoSort(a, b))

            return {
                ...state,
                todos: newTodos
            }



        default:
            return state;

    }
}

export default reducer;