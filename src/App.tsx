import React, { useState } from 'react';
import styled from 'styled-components';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';

const dumydata = [
  { id: '1', title: 'test1', checked: false },
  { id: '2', title: 'test2', checked: true },
  { id: '3', title: 'test3', checked: false },
];

interface TodoInterface {
  id: string;
  title: string;
  checked: boolean;
}
function App() {
  const [todos, setTodos] = useState(dumydata);

  const create = (newTodo: TodoInterface) => {
    const newTodoList: Array<TodoInterface> = [...todos, newTodo];
    setTodos(newTodoList);
  };
  const handleClickDelete = (id: string) => {
    const newTodoList: Array<TodoInterface> = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  const handleChangeChecked = (id: string, checked: boolean) => {
    const newTodoList: Array<TodoInterface> = todos.map((todo) =>
      todo.id === id ? { ...todo, checked } : todo,
    );
    setTodos(newTodoList);
  };

  const sortedList = todos.sort((a: TodoInterface, b: TodoInterface) => (a.checked > b.checked ? 1 : -1));

  return (
    <StyledApp>
      <CreateTodo create={create} />
      <div className='todo-area'>
        <h1>Todo List</h1>
        <ul>
          {sortedList.map((todo: TodoInterface) => (
            <Todo
              key={todo.id}
              todo={todo}
              onChangedChecked={handleChangeChecked}
              onClickDelete={handleClickDelete}
            />
          ))}
        </ul>
      </div>
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
