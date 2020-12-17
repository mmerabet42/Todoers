import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

import { ProjectProvider } from '../../Contexts/ProjectContext';
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
        <ProjectProvider>
          <TodosProvider>
            <GroupNamesProvider>
              <TodoBody>
                <TodoInput />
                <TodoList />
              </TodoBody>
            </GroupNamesProvider>
          </TodosProvider>
        </ProjectProvider>
        <Notifications />
      </BodyContainer>
    </NotificationsProvider>
  );
}

export default App;
