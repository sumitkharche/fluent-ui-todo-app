import React, { useState } from 'react';
import './App.css';
import { Stack } from "@fluentui/react";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo Item 1" }, { id: 2, name: "Todo Item 2" }]);

  const addTodo = (todoName: string) => {
    if (todoName != "") {
      const newId = todos.length + 1;
      const newTodos = [...todos, { id: newId, name: todoName }];
      setTodos(newTodos);
    }
  };

  const deleteTodo = (id: number) => {
    const newTasks = todos.filter((todo) => { return todo.id !== id });
    setTodos(newTasks);
  };

  return (
    <div className="wrapper">
      <Stack horizontalAlign="center">
        <h1>Todo App using Fluent UI & React</h1>
        <Stack style={{ width: 300 }} gap={25}>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
