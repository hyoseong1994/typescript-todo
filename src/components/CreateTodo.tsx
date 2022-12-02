import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface todoInterface {
  id: string;
  title: string;
  checked: boolean;
}
interface CreateTodoInterface {
  create: (todo: todoInterface) => void;
}

const CreateTodo: React.FC<CreateTodoInterface> = ({ create }) => {
  const defaultTodo = {
    id: uuidv4(),
    title: '',
    checked: false,
  };

  const [newTodo, setNewTodo] = useState(defaultTodo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    create(newTodo);
    setNewTodo(defaultTodo);
  };

  return (
    <StyledForm onSubmit={handleSubmit} className='todo-area'>
      <h1>할일 등록</h1>
      <div className='todo-add-box'>
        <label htmlFor='title'>Title</label>
        <input
          value={newTodo.title}
          onChange={handleChange}
          id='title'
          type='text'
          name='title'
          placeholder='제목을 입력해주세요.'
          required
        />
      </div>
      <button>등록</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  .todo-add-box {
    margin-bottom: 15px;
    label {
      display: block;
      margin-bottom: 4px;
    }
  }
  input {
    width: 100%;
    text-indent: 8px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0;
  }
  button {
    width: 100%;
    height: 40px;
    background-color: #6aa1d9;
    border: 1px solid #314d68;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
  }
`;

export default CreateTodo;
