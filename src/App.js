import { useState, useEffect } from 'react';
import TodoContent from './components/TodoApp/TodoContent';
import Provider from './Context/Provider';
import EditProvider from './Context/EditProvider.js';
import ButtonInputProvider from './Context/ButtonInputProvider.js';
import ButtonSearchProvider from './Context/ButtonSearchProvider.js';
import Loading from './components/Loading/Loading.js';


function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    setLoading(false);
  }, []);

  return (
    <Provider>
      <EditProvider>
        <ButtonInputProvider>
          <ButtonSearchProvider>
            <div className = 'app'>
              {loading ? <Loading /> 
              : <TodoContent />}
            </div>
          </ButtonSearchProvider>
        </ButtonInputProvider>
      </EditProvider>
    </Provider>
  );
}

export default App;