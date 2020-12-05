import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todoList, setTodoList] = useState([
        {
            id: uuidv4(),
            details: "Todo Example",
            done: true
        }
    ]);

    return (
        <TodoContext.Provider value={[todoList, setTodoList]}>
            {props.children}
        </TodoContext.Provider>
    );
};