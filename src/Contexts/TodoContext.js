import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../Utils/getDate';

export const TodosContext = createContext();

export const TodosProvider = props => {
    const [todoList, setTodoList] = useState([{
        group: "Main",
        id: uuidv4(),
        details: "Todo Example",
        done: false,
        creationDate: getDate()
    }]);

    return (
        <TodosContext.Provider value={[todoList, setTodoList]} style={{height: "100%"}}>
            {props.children}
        </TodosContext.Provider>
    );
};