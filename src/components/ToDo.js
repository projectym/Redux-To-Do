import React from 'react'
import { connect } from 'react-redux'


const ToDo = ({ text, deleteToDo }) => {
    return (
        <div>
            <p style={{ display: "inline" }}>{text}</p>
            <button onClick={deleteToDo}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteToDo: () => {
            dispatch({
                type: 'DELETE_TODO',
                payload: {
                    id: ownProps.id
                }
            })
        }

    }

}

export default connect(null, mapDispatchToProps)(ToDo)
