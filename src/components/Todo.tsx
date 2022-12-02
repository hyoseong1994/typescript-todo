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
  onChangedChecked: (key: string, checked: boolean) => void;
  onClickDelete: (key: string) => void;
}

const Todo: React.FC<TodoObjInterface> = ({ todo, onChangedChecked, onClickDelete }) => {
  return (
    <StyledTodo checked={todo.checked}>
      <input
        type='checkbox'
        name='checked'
        checked={todo.checked}
        onChange={(e) => onChangedChecked(todo.id, e.target.checked)}
      />
      <span>{todo.title}</span>
      <button onClick={() => onClickDelete(todo.id)}>삭제</button>
    </StyledTodo>
  );
};

const StyledTodo = styled.li<{ checked: boolean }>`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  span {
    (props) => ;
    ${(props) => props.checked && 'text-decoration: line-through'};
  }
  button {
    height: 20px;
    background-color: #d96a6a;
    border: 1px solid #683135;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
  }
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
