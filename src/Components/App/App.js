import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

import { TodosProvider } from '../../Contexts/TodoContext';
import { GroupNamesProvider } from '../../Contexts/GroupNamesContext';
import { NotificationsProvider } from '../../Contexts/NotificationsContext';

import {
  BodyContainer,
  TodoBody
} from './App.style';
import Notifications from '../Notifications/Notifications';


const App = () => {
  return (
    <NotificationsProvider>
      <BodyContainer>
        <Topbar />
        <TodosProvider>
          <GroupNamesProvider>
            <TodoBody>
              <TodoInput />
              <TodoList />
            </TodoBody>
          </GroupNamesProvider>
          <Notifications />
        </TodosProvider>
      </BodyContainer>
    </NotificationsProvider>
  );
}

export default App;
