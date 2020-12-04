import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todoList, setTodoList] = useState([
        {
            value: "Todo Example",
            done: false
        }
    ]);

    return (
        <TodoContext.Provider>
            {props.children}
        </TodoContext.Provider>
    );
};