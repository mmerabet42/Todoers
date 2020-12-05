import React, {useContext} from 'react';
import {TodoContext} from '../Contexts/TodoContext';

import TodoCard from '../TodoCard/TodoCard';

import {
    TodosContainer
} from './TodoList.style';

const TodoList = () => {
    const [todoList, setTodoList] = useContext(TodoContext);

    return (
        <TodosContainer>
            {todoList.map((todo, id) => (
                <TodoCard key={id} todo={todo} />
            ))}
        </TodosContainer>
    );
}

export default TodoList;