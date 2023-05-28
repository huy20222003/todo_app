import React from 'react';
import { useContext, memo } from 'react';
import TodoContext from '../../Context/TodoContext.js';
import EditContext from '../../Context/EditContext.js';
import { setJob, addJob, updateJob } from '../../Reducer/action.js';

function TodoInputAdd() {
  const {state, dispatch} = useContext(TodoContext);
  const {edit, setEdit, editIndex, inputRef} = useContext(EditContext);

  const {job} = state;
  
  const handleAdd = ()=> {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }
  
  const handleUpdate = (job)=> {
    let newJob = {
      id: editIndex,
      content: job
    }
    //console.log(updateJob(newJob))
    dispatch(updateJob(newJob));
    setEdit(false);
    dispatch(setJob(''));
  }
  
  return (
    <div className = 'text-center'>
      <input 
        ref = {inputRef}
        value = {job}
        placeholder = 'Enter a word...'
        onChange = {(e) => {
          dispatch(setJob(e.target.value));
        }}
        className = 'w-52 p-2 border-gray-500 border-2 outline-cyan-500 rounded-md'
      />
      <button className = 'm-1.5 bg-cyan-400 rounded-md text-white px-3 py-2 shadow-lg' onClick = {edit ? ()=>handleUpdate(job) : handleAdd}>
        <i className={`fa-solid fa-${edit ? 'check' : 'plus'}`}></i>
      </button>
    </div>
  );
}

export default memo(TodoInputAdd);