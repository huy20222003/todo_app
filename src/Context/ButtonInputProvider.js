import React from 'react';
import { useState } from 'react';
import ButtonInputContext from './ButtonInputContext.js';

function ButtonInputProvider({children}) {
  const [add, setAdd] = useState(false);
  
  return (
    <ButtonInputContext.Provider value = {{add, setAdd}}>
      {children}
    </ButtonInputContext.Provider>
  );
}

export default ButtonInputProvider;
