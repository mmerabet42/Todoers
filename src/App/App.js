import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

import { TodosProvider } from '../Contexts/TodoContext';

import {
  BodyContainer,
  TodoBody
} from './App.style';
import { GroupNamesProvider } from '../Contexts/GroupNamesContext';
import { NotificationsProvider } from '../Contexts/NotificationsContext';
import Notifications from '../Notifications/Notifications';

const App = () => {
  return (
    <NotificationsProvider>
      <TodosProvider>
        <BodyContainer>
          <Topbar />
          <GroupNamesProvider>
            <TodoBody>
              <TodoInput />
              <TodoList />
            </TodoBody>
          </GroupNamesProvider>
          <Notifications />
        </BodyContainer>
      </TodosProvider>
    </NotificationsProvider>
  );
}

export default App;
