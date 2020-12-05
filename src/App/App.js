import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

import {TodoProvider} from '../Contexts/TodoContext';

import {
  BodyContainer,
  Separator
} from './App.style';

const App = () => {
  return (
    <TodoProvider>
      <BodyContainer>
        <Topbar />  
        <TodoInput />
        <Separator />
        <TodoList />
      </BodyContainer>
    </TodoProvider>
  );
}

export default App;
