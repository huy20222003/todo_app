import React from 'react';
import { useContext, memo } from 'react';
import TodoContext from '../../Context/TodoContext.js';
import EditContext from '../../Context/EditContext.js';
import { deleteJob, editJob } from '../../Reducer/action.js';


function TodoListItem() {
  const {state, dispatch} = useContext(TodoContext);
  const {jobs, jobsList} = state;
  const {setEdit, setEditIndex, inputRef} = useContext(EditContext);
  
  const handleDelete = (index)=> {
    dispatch(deleteJob(index));
  }

  const handleEdit = (index)=> {
    dispatch(editJob(jobs[index]));
    setEditIndex(index);
    setEdit(true);
    inputRef.current.focus();
  }
  
  return (
    <React.Fragment>
      {jobsList.length > 0 ?
        jobsList.map((item, index) =>(
          <div 
            key = {index}
            className = 'flex justify-between bg-white shadow-lg rounded-md w-11/12 border-2 border-gray-300 ml-3 mb-2 p-2 items-center'
          >
            <div className = 'ml-3'>
               <span>{item}</span>
            </div>
            <div className = 'mr-3'>
              <span 
                className = 'bg-rose-400 py-1 px-2 rounded-md text-white'
                onClick = {()=>handleDelete(index)}>
                  <i className = 'fa-solid fa-trash fa-bounce'></i>
                </span>
               <span 
                  className = 'bg-yellow-400 py-1 px-2 mx-1 rounded-md text-white'
                  onClick = {()=>handleEdit(index)}>
                  <i className = 'fa-solid fa-pen fa-beat'></i>
                </span>
            </div>
          </div>
        ))
      : <div className = 'text-center'>
          Not Found
        </div>
      }
    </React.Fragment>
  );
}

export default memo(TodoListItem);