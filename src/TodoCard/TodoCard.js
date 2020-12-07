import React, {useContext} from 'react';
import { NotificationsContext } from '../Contexts/NotificationsContext';

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
    const [notifications, setNotification, addNotification] = React.useContext(NotificationsContext);

    const handleRemove = () => {
        addNotification("valid", `Todo '${todo.details}' has been deleted.`);
        setTodoList(prev => prev.filter(value => value.id !== todo.id));
    }

    const handleCheck = () => {
        const newList = [...todoList];
        const todoCopy = newList.find(value => value.id === todo.id);
        todoCopy.done = !todoCopy.done;
        addNotification("valid", `Todo '${todo.details}' done status has changed to '${todoCopy.done}'.`);
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