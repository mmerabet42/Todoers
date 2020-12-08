import React from 'react';
import { NotificationsContext } from '../Contexts/NotificationsContext';

import { TodosContext } from '../Contexts/TodoContext';
import TodoMenu from '../TodoMenu/TodoMenu';

import {
    CardContainer,
    SelectorContainer,
    RemoveButton,
    DoneCheckbox,
    InfoContainer,
} from './TodoCard.style';
import ShadowMask from '../ShadowMask/ShadowMask';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';

const TodoCard = ({todo}) => {
    const [todoList, setTodoList] = React.useContext(TodosContext);
    const [{}, {}, getPercentage] = React.useContext(GroupNamesContext);
    const [{}, {}, addNotification] = React.useContext(NotificationsContext);
    const [openMenu, setOpenMenu] = React.useState(false);

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
        <>
            <CardContainer>
                <InfoContainer onClick={() => setOpenMenu(!openMenu)}>
                    <p className="details">{todo.details}</p>
                    <p className="creationDate">{todo.creationDate}</p>
                </InfoContainer>
                <SelectorContainer>
                    {todo.connectedGroup !== null
                        ? (<p>{todo.connectedGroup} • {getPercentage(todo.connectedGroup)}%</p>)
                        : (<DoneCheckbox onClick={handleCheck} done={todo.done}>✓</DoneCheckbox>)
                    }
                    <RemoveButton onClick={handleRemove}>✖</RemoveButton>
                </SelectorContainer>
            </CardContainer>
            {openMenu && <ShadowMask onClick={() => setOpenMenu(false)}>
                <TodoMenu todo={todo} setOpenMenu={setOpenMenu} />
            </ShadowMask> }
        </>
    );
}

export default TodoCard;