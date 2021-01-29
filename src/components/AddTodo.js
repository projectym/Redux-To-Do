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
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={textVal} onChange={(e) => setTextVal(e.target.value)} />
                <button type='submit' onClick={handleSubmit} >Add To Do</button>

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
