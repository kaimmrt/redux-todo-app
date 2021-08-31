import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterText } from '../redux/todos/todosSlice'

const Header = () => {

    const search = useSelector(state => state.todos.textFilter)
    const dispatch = useDispatch()

    return (
        <div>
            <p className="header-title">NotesApp</p>
            <br />
            <input className="search-input" placeholder="Search..." value={search} onChange={(e) => dispatch(filterText(e.target.value))} />
        </div>
    )
}

export default Header
