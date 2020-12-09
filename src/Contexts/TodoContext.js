import React, { createContext, useState } from 'react';

import { todoContext } from '../DefaultValues/Default';

export const TodosContext = createContext();

export const TodosProvider = props => {
    const [ todoList, setTodoList ] = useState(todoContext);

    return (
        <TodosContext.Provider value={{todoList, setTodoList}} style={{height: "100%"}}>
            {props.children}
        </TodosContext.Provider>
    );
};