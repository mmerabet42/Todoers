import React, {useContext} from 'react';

import {TodosContext} from '../Contexts/TodoContext';

import {
    CardContainer,
    SelectorContainer,
    RemoveButton,
    DoneCheckbox,
    InfoContainer,
    CardDate
} from './TodoCard.style';

const TodoCard = ({todo}) => {
    const [todoList, setTodoList] = useContext(TodosContext);

    const handleRemove = () => {
        setTodoList(prev => prev.filter(value => value.id !== todo.id));
    }

    const handleCheck = async () => {
        const newList = [...todoList];
        const todoCopy = newList.find(value => value.id === todo.id);
        todoCopy.done = !todoCopy.done;
        setTodoList(newList);
    }

    return (
        <CardContainer>
            <InfoContainer>
                <p className="details">{todo.details}</p>
                <p className="creationDate">{todo.creationDate}</p>
            </InfoContainer>
            <SelectorContainer>
                <DoneCheckbox onClick={handleCheck} done={todo.done}>✓</DoneCheckbox>
                <RemoveButton onClick={handleRemove}>✖</RemoveButton>
            </SelectorContainer>
        </CardContainer>
    );
}

export default TodoCard;