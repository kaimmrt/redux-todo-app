import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import '../src/App.css'

const App = () => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <br /><br />
        <Header />
        <br />
        <Form />
        <TodoList />
      </div>
    </div>

  )
}

export default App
