import React from 'react';

import { TodosContext } from './TodoContext';

import { groupContext } from '../DefaultValues/Default';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [ groupNames, setGroupNames,  ] = React.useState(groupContext);
    const { todoList, setTodoList } = React.useContext(TodosContext);

    const groupPercentage = (groupId) => {
        const list = todoList.filter(value => value.group === groupId);
        
        return ((list.filter(value => value.done && !value.connectedGroup).length / (list.length ? list.length : 1)) * 100).toFixed(1);
    }

    const getGroupById = (groupId) => {
        return groupNames.list.find(value => value.id === groupId);
    }

    const deleteGroupById = async (groupId) => {
        setGroupNames(prev => ({
            current: (prev.current === groupId ? (prev.list.length ? prev.list[0].id : null) : prev.current),
            list: prev.list.filter(value => value.id !== groupId)
        }));
        await setTodoList(prev => {
            const copyPrev = prev.filter(value => value.connectedGroup === groupId);
            copyPrev.forEach(value => value.connectedGroup = null);
            return copyPrev;
        })
        setTodoList(prev => prev.filter(value => value.group !== groupId));
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