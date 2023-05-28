import React from 'react';
import { useReducer } from 'react';
import TodoContext from './TodoContext.js';
import reducer, { initState } from '../Reducer/reducer.js';

function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, initState);
  
  return (
    <TodoContext.Provider value = {{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
}

export default Provider;
