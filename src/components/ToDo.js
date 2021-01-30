import React from 'react'
import { connect } from 'react-redux'


const ToDo = ({ text, checked, deleteToDo, updateToDo }) => {
    return (

        <div className="my-card d-flex flex-row justify-content-between">
            <h4 style={{ display: "inline" }}>{text}</h4>
            <div>
                <button className={checked ? "btn btn-success" : "btn btn-dark"} onClick={updateToDo}>{checked ? "Done" : "Check"}</button>
                <button className="btn btn-danger" onClick={deleteToDo}>Del</button>
            </div>

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
        },
        updateToDo: () => {
            dispatch({
                type: 'UPDATE_TODO',
                payload: {
                    id: ownProps.id
                }
            })
        }

    }

}

export default connect(null, mapDispatchToProps)(ToDo)
