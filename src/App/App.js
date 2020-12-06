import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

import { TodosProvider } from '../Contexts/TodoContext';

import {
  BodyContainer,
  Separator
} from './App.style';
import { GroupNamesProvider } from '../Contexts/GroupNamesContext';

const App = () => {
  return (
    <TodosProvider>
      <BodyContainer>
        <Topbar />
        <GroupNamesProvider>
          <TodoInput />
          <Separator />
          <TodoList />
        </GroupNamesProvider>
      </BodyContainer>
    </TodosProvider>
  );
}

export default App;
