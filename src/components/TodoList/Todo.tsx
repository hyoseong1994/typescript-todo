import React from 'react';
import styled from 'styled-components';

interface TodoInterface {
  id: string;
  title: string;
  checked: boolean;
}
interface TodoObjInterface {
  key: string;
  todo: TodoInterface;
}

const Todo: React.FC<TodoObjInterface> = ({ todo }) => {
  return (
    <StyledTodo>
      <h3>{todo.title}</h3>
    </StyledTodo>
  );
};

const StyledTodo = styled.li`
  display: flex;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  .score {
    display: flex;
  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 12px;
    background-color: #fcf67b;
    border: 1px solid #fcf67b;
    margin-right: 4px;
  }
  .circle:last-child {
    margin-right: 0;
  }
`;

export default Todo;
