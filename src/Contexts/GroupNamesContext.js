import React from 'react';

import { TodosContext } from './TodoContext';
import { ProjectContext } from './ProjectContext';

import { groupContext } from '../DefaultValues/Default';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [ groupNames, setGroupNames ] = React.useState(groupContext);
    const { todoList, setTodoList } = React.useContext(TodosContext);
    const { projects, setProjects } = React.useContext(ProjectContext);

    const groupPercentage = (groupId) => {
        const list = todoList.filter(value => value.group === groupId);
        
        return ((list.filter(value => value.done && !value.connectedGroup).length / (list.length ? list.length : 1)) * 100).toFixed(1);
    }

    const getGroupById = (groupId, projectId) => {
        if (!projectId)
            projectId = projects.current;

        return groupNames.find(value => value.id === groupId && value.projectId === projectId);
    }

    const deleteGroup = async (group) => {
        setProjects(prev => {
            const copyList = [...prev.list];
            const currentProject = copyList.find(value => value.id === group.projectId);
            
            if (currentProject.current === group.id) {
                const groupList = groupNames.filter(value => value.projectId === currentProject.id && value.id !== group.id);
                currentProject.current = (groupList.length ? groupList[0].id : null);
            }
            return {
                current: prev.current,
                list: copyList
            };
        });
        setGroupNames(prev => prev.filter(value => value.id !== group.id));
        setTodoList(prev => {
            const copyPrev = prev.filter(value => value.group !== group.id);
            copyPrev.forEach(value => {
                if (value.connectedGroup === group.id)
                    value.connectedGroup = null
            });
            return copyPrev;
        });
    }

    const value = {
        groupNames,
        setGroupNames,
        groupPercentage,
        getGroupById,
        deleteGroup
    }

    return (
        <GroupNamesContext.Provider value={value} style={{flex: "1 1 auto"}}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};