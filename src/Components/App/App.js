import React from 'react';

import Topbar from '../Topbar/Topbar';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import ProjectList from '../ProjectsList/ProjectList';

import { ProjectContext, ProjectProvider } from '../../Contexts/ProjectContext';
import { TodosProvider } from '../../Contexts/TodoContext';
import { GroupNamesContext, GroupNamesProvider } from '../../Contexts/GroupNamesContext';
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
              <InnerApp />
            </GroupNamesProvider>
          </TodosProvider>
        </ProjectProvider>
        <Notifications />
      </BodyContainer>
    </NotificationsProvider>
  );
}

const InnerApp = () => {
  const { projects } = React.useContext(ProjectContext);

  if (projects.current)
    return (
      <TodoBody>
        <TodoInput />
        <TodoList />
      </TodoBody>
    );

  return (
    <ProjectList />
  );
}

export default App;
