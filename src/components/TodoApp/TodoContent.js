import { memo } from 'react';
import TodoHeader from './TodoHeader';
import TodoHeaderButton from './TodoHeaderButton.js';
import TodoList from './TodoList.js';

function TodoContent() {
  return (
    <div className = 'bg-white w-80 shadow-lg rounded-md'>
      <TodoHeader />
      <TodoHeaderButton />
      <TodoList />
    </div>
  );
}

export default memo(TodoContent);