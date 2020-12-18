import React from 'react';

import { TodosContext } from '../../Contexts/TodoContext';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';

import TodoGroup from '../TodoGroup/TodoGroup';

import {
    ProjectContainer,
    TodosContainer,
    NoTodos
} from './TodoList.style';
import { ProjectContext } from '../../Contexts/ProjectContext';

const TodoList = () => {
    const { todoList } = React.useContext(TodosContext);
    const { groupNames } = React.useContext(GroupNamesContext);
    const { projects, getProjectById } = React.useContext(ProjectContext);

    const groupList = groupNames.filter(valueElement => valueElement.projectId === projects.current);

    return (
        <ProjectContainer>
            <p className="project-title">{getProjectById(projects.current).name}</p>
            <TodosContainer>
                {groupList.length ? groupList.map((group) => (
                    <TodoGroup key={group.id} isCurrent={getProjectById(projects.current).current === group.id} group={group} list={todoList.filter(value => value.group === group.id)} />
                )) : <NoTodos><p>There are no todos yet.</p></NoTodos>}
            </TodosContainer>   
        </ProjectContainer>
    );
}

export default TodoList;