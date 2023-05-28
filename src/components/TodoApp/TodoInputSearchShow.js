import React from 'react';
import { useContext, memo } from 'react';
import ButtonInputContext from '../../Context/ButtonInputContext';
import ButtonSearchContext from '../../Context/ButtonSearchContext';
import TodoInputSearch from './TodoInputSearch.js';

function TodoInputSearchShow() {
  const { add, setAdd } = useContext(ButtonInputContext);
  const { search } = useContext(ButtonSearchContext);

  if (search && add) {
    setAdd(false);
    return (
      <div>
        <TodoInputSearch />
      </div>
    );
  } else if(search && add === false) {
    return (
      <div>
        <TodoInputSearch />
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default memo(TodoInputSearchShow);