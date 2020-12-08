import React from 'react';
import TodoList from '../TodoList/TodoList';
import { TodosContext } from './TodoContext';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [groupNames, setGroupNames] = React.useState({
        current: "Example",
        list: ["Example"]
    });
    const [todos] = React.useContext(TodosContext);

    const groupPercentage = (groupName) => {
        const todoList = todos.filter(value => value.group === groupName);
        
        return ((todoList.filter(value => value.done).length / (todoList.length ? todoList.length : 1)) * 100).toFixed(1);
    }

    return (
        <GroupNamesContext.Provider value={[groupNames, setGroupNames, groupPercentage]} style={{flex: "1 1 auto"}}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};