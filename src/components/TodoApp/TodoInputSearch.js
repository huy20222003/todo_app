import React from 'react';
import { useContext, memo } from 'react';
import TodoContext from '../../Context/TodoContext.js';
import { setJob, searchJob } from '../../Reducer/action.js';

function TodoInputSearch() {
  const {state, dispatch} = useContext(TodoContext);
  const {job} = state;
  
  const handleSearch = (e)=>{
    dispatch(setJob(e.target.value));
    dispatch(searchJob(e.target.value));
  }
  
  return (
    <div className = 'text-center'>
      <input 
        value = {job}
        placeholder = 'Enter a word...'
        onChange = {handleSearch}
        className = 'w-52 p-2 border-gray-500 border-2 outline-cyan-500 rounded-md'
      />
    </div>
  );
}

export default memo(TodoInputSearch);