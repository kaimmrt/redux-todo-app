import React, { useState } from 'react'
import ColorPalette from './ColorPalette'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todos/todosSlice'

const Form = () => {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")

    const AddTodo = () => {
        dispatch(addTodo(todo))
        setTodo('')
    }
    return (
        <div className="form-container">
            <textarea className="form-input" placeholder="Enter your note here..." value={todo} onChange={(e) => setTodo(e.target.value)} />

            <div className="form-footer">
                <ColorPalette />
                <button className="add-button" onClick={() => AddTodo()}>ADD</button>
            </div>
        </div>
    )
}

export default Form
