import React from 'react';
import { useState, useRef } from 'react';
import EditContext from './EditContext.js';

function EditProvider({children}) {
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const inputRef = useRef();
  
  return (
    <EditContext.Provider value = {{edit, setEdit, editIndex, setEditIndex, inputRef}}>
      {children}
    </EditContext.Provider>
  );
}

export default EditProvider;
