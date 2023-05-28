import React from 'react';
import { memo, useContext } from 'react';
import TodoInputAddShow from './TodoInputAddShow.js';
import TodoInputSearchShow from './TodoInputSearchShow.js';
import ButtonInputContext from '../../Context/ButtonInputContext';
import ButtonSearchContext from '../../Context/ButtonSearchContext';

function TodoHeaderButton() {
  
  const {add, setAdd} = useContext(ButtonInputContext);
  const {search, setSearch} = useContext(ButtonSearchContext);
  
  return (
    <React.Fragment>
      <div className = 'flex justify-center mt-2'>
        <button className = 'border-none outline-none px-2.5 py-2 mr-2 rounded-md bg-indigo-400 text-white'
          onClick = {()=>setAdd(!add)}
        >
          Add
        </button>
        <button className = 'border-none outline-none px-2.5 py-2 mr-2 rounded-md bg-cyan-400 text-white'
          onClick = {()=>setSearch(!search)}
        >
          Search
        </button>
      </div>
      <div className = 'mt-2'>
        <TodoInputAddShow />
        <TodoInputSearchShow />
      </div>
    </React.Fragment>
  );
}

export default memo(TodoHeaderButton);