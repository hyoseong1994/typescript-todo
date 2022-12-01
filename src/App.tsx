import React, { useState } from 'react';
import styled from 'styled-components';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const dumydata = [
  { id: '1', title: 'test1', checked: false },
  { id: '2', title: 'test2', checked: true },
  { id: '3', title: 'test3', checked: false },
];

interface todoInterface {
  id: string;
  title: string;
  checked: boolean;
}
function App() {
  const [todos, setTodos] = useState(dumydata);

  const create = (newTodo: todoInterface) => {
    const newTodoList: Array<todoInterface> = [...todos, newTodo];
    setTodos(newTodoList);
  };

  return (
    <StyledApp>
      <CreateTodo create={create} />
      <TodoList todos={todos} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #194e84;
  h3 {
    font-size: 14px;
    margin-top: 0;
  }
  input,
  select {
    width: 100%;
    text-indent: 8px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0;
  }
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
  .todo-area {
    height: 100%;
    margin: 0 auto;
    padding: 20px;
  }
`;

export default App;
