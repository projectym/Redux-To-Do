import { connect } from 'react-redux'
import ToDo from './ToDo'

const ToDoList = ({ todos }) => {
    return (
        <div className="to-do-list p-3">
            {todos.map(todo => {
                return (
                    <ToDo key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />
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
