import React, {useState} from 'react'
import Header from './components/Header'
import GetTodo from './components/GetTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Header />
      <GetTodo />
      <TodoList />
    </div>
  );
}

export default App;
