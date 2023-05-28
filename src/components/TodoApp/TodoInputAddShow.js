import React from 'react';
import { useContext, memo } from 'react';
import ButtonInputContext from '../../Context/ButtonInputContext';
import ButtonSearchContext from '../../Context/ButtonSearchContext';
import TodoInputAdd from './TodoInputAdd.js';

function TodoInputAddShow() {
  const {add} = useContext(ButtonInputContext);
  const {search, setSearch} = useContext(ButtonSearchContext);
  
  if(add && search) {
    setSearch(false);
    return (
      <div>
        <TodoInputAdd />
      </div>
    );
  } else if(add && search === false) {
    return (
      <div>
        <TodoInputAdd />
      </div>
    );
  }else {
    return (
      <div></div>
    );
  }
}

export default memo(TodoInputAddShow);