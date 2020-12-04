import React from 'react';

import Topbar from './Topbar/Topbar';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

import {TodoProvider} from './Contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <Topbar />  
      <TodoInput />
      <center>
        <TodoList />
      </center>
    </TodoProvider>
  );
}

export default App;
