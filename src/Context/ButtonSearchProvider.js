import React from 'react';
import { useState } from 'react';
import ButtonSearchContext from './ButtonSearchContext.js';

function ButtonSearchProvider({children}) {
  const [search, setSearch] = useState(false);
  
  return (
    <ButtonSearchContext.Provider value = {{search, setSearch}}>
      {children}
    </ButtonSearchContext.Provider>
  );
}

export default ButtonSearchProvider;
