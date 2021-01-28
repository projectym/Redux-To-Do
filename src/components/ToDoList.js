import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => {
                return (
                    <p key={todo.id}>{todo.text}</p>
                )
            })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDoList)
