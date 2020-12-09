import React from 'react';

import { TodosContext } from './TodoContext';

import { groupContext } from '../DefaultValues/Default';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [ groupNames, setGroupNames ] = React.useState(groupContext);
    const { todoList } = React.useContext(TodosContext);

    const groupPercentage = (groupId) => {
        const list = todoList.filter(value => value.group === groupId);
        
        return ((list.filter(value => value.done && !value.connectedGroup).length / (list.length ? list.length : 1)) * 100).toFixed(1);
    }

    const getGroupById = (groupId) => {
        return groupNames.list.find(value => value.id === groupId);
    }

    return (
        <GroupNamesContext.Provider value={{groupNames, setGroupNames, groupPercentage, getGroupById}} style={{flex: "1 1 auto"}}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};