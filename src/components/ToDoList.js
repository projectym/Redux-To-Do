import { connect } from 'react-redux'
import ToDo from './ToDo'

const ToDoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => {
                return (
                    <ToDo key={todo.id} id={todo.id} text={todo.text} />
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
