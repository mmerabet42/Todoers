import React from 'react';

import { TodosContext } from './TodoContext';
import { ProjectContext } from './ProjectContext';

import { groupContext } from '../DefaultValues/Default';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [ groupNames, setGroupNames,  ] = React.useState(groupContext);
    const { todoList, setTodoList } = React.useContext(TodosContext);
    const { projects, setProjects } = React.useContext(ProjectContext);

    const groupPercentage = (groupId) => {
        const list = todoList.filter(value => value.group === groupId);
        
        return ((list.filter(value => value.done && !value.connectedGroup).length / (list.length ? list.length : 1)) * 100).toFixed(1);
    }

    const getGroupById = (groupId) => {
        return groupNames.list.find(value => value.id === groupId);
    }

    const deleteGroupById = async (groupId) => {
        // const group = getGroupById(groupId);

        // setProjects(prev => {
        //     const copyList = [...prev.list];
        //     const currentProject = copyList.find(value => value.id === group.projectId);

        //     if (currentProject.current === groupId) {
        //         const groupList = groupNames.filter(value => value.projectId === group.projectId);
        //         currentProject.current = (groupList.length ? groupList[0].id : null);
        //     }
        //     return copyList;
        // });
        setGroupNames(prev => ({
            current: (prev.current === groupId ? (prev.list.length ? prev.list[0].id : null) : prev.current),
            list: prev.list.filter(value => value.id !== groupId)
        }));
        setTodoList(prev => {
            const copyPrev = prev.filter(value => value.group !== groupId);
            copyPrev.forEach(value => {
                if (value.connectedGroup == groupId)
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
        deleteGroupById
    }

    return (
        <GroupNamesContext.Provider value={value} style={{flex: "1 1 auto"}}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};