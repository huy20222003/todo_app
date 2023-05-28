import React from 'react';
import { memo } from 'react';
import TodoListItem from './TodoListItem.js';

function TodoList() {
  return (
    <div className = 'pb-2'>
      <h2 className = 'px-2.5 my-3.5 text-lg font-normal'>Todo List:</h2>
      <TodoListItem />
    </div>
  );
}

export default memo(TodoList);