import { useState } from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ addToDo }) => {
    const [textVal, setTextVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (textVal.length > 0) {
            console.log(textVal);
            const id = Math.floor(Math.random() * 10000 + 1);
            addToDo(textVal, id);

            setTextVal('');
        }

    }

    return (
        <div className="d-flex flex-row align-items-center">
            <form className="d-flex flex-row align-items-center" action="" onSubmit={handleSubmit}>
                <input type="text" value={textVal} maxLength="25" onChange={(e) => setTextVal(e.target.value)} />
                <button className="btn btn-secondary" type='submit' onClick={handleSubmit} >Add To Do</button>

            </form>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text, id) => {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    todo: {
                        id: id,
                        text: text
                    }
                }
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)
