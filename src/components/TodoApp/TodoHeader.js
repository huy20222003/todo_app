import React from 'react';
import { memo } from 'react';

function TodoHeader() {
  return (
    <div className = 'text-center py-2.5'>
      <header className = 'text-2xl font-medium'>Todo App</header>
    </div>
  );
}

export default memo(TodoHeader);