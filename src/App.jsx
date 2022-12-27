import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
 
  const initialTodos = [
    // { id: 1, title: "Estudar React", checked: false },
    // { id: 2, title: "Estudar Inglês", checked: true },
    // { id: 3, title: "Tocar guitarra", checked: false },
    // { id: 4, title: "Aprender Python", checked: false },
  ];

  const [todos, setTodos] = useState(initialTodos)

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      }])
  }
  const onToggle = (todo) => {
    const newTodos = todos.map((obj) =>
      obj.id === todo.id ?
        { ...obj, checked: !todo.checked } : obj)
    setTodos(newTodos)
  }

  const onRemove = (todo) => {
    const todosRemoved = todos.filter((obj) => obj.id !== todo.id)
    setTodos(todosRemoved)
   }

  return (
    <section id="app" className="container">
      <header>
        <h1 className='title'>toDO</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
       
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />

      </section>
    </section>
  );

};
export default App;
