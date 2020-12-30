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
    const { projects, setProjects, getProjectById } = React.useContext(ProjectContext);

    const groupList = groupNames.filter(valueElement => valueElement.projectId === projects.current);

    const closeProject = () => {
        setProjects(prev => ({
            current: null,
            list: prev.list
        }));
    }
    console.log(`hehfzefedve: ${projects.current}`);

    return (
        <ProjectContainer>
            <div className="project-div" onClick={closeProject}>
                <p className="back-arrow">▲</p>
                <p className="project-title">{getProjectById(projects.current).name}</p>
            </div>
            <TodosContainer>
                {groupList.length ? groupList.map((group) => (
                    <TodoGroup key={group.id} isCurrent={getProjectById(projects.current).current === group.id} group={group} list={todoList.filter(value => value.group === group.id)} />
                )) : <NoTodos><p>There are no todos yet.</p></NoTodos>}
            </TodosContainer>   
        </ProjectContainer>
    );
}

export default TodoList;