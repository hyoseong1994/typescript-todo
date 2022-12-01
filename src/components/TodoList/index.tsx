import React from 'react';
import Todo from './Todo';

interface TodoInterface {
  id: string;
  title: string;
  checked: boolean;
}

interface TodoListnterface {
  todos: Array<TodoInterface>;
}

const TodoList: React.FC<TodoListnterface> = ({ todos }) => {
  const sortedList = todos.sort((a: TodoInterface, b: TodoInterface) => (a.checked > b.checked ? -1 : 1));

  return (
    <div className='todo-area'>
      <h3>Todo List</h3>
      <ul>
        {sortedList.map((todo: TodoInterface) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
