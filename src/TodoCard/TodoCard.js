import React, {useContext} from 'react';

import {TodoContext} from '../Contexts/TodoContext';

import {
    CardContainer,
    SelectorContainer,
    RemoveButton,
    DoneCheckbox
} from './TodoCard.style';

const TodoCard = ({todo}) => {
    const [todoList, setTodoList] = useContext(TodoContext);

    const handleRemove = () => {
        setTodoList(prev => prev.filter(value => value.id !== todo.id));
    }

    const handleCheck = async () => {
        const newTodos = [...todoList];
        const foundTodo = newTodos.find(value => value.id === todo.id);
        foundTodo.done = !foundTodo.done;
        setTodoList(newTodos);
    }

    return (
        <CardContainer>
            <p>{todo.details}</p>
            <SelectorContainer>
                <DoneCheckbox onClick={handleCheck} done={todo.done}>✓</DoneCheckbox>
                <RemoveButton onClick={handleRemove}>✖</RemoveButton>
            </SelectorContainer>
        </CardContainer>
    );
}

export default TodoCard;