import React from 'react';

import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { TodosContext } from '../../Contexts/TodoContext';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';

import TodoMenu from '../TodoMenu/TodoMenu';

import {
    CardContainer,
    SelectorContainer,
    RemoveButton,
    DoneCheckbox,
    InfoContainer,
} from './TodoCard.style';
import ShadowMask from '../ShadowMask/ShadowMask';

const TodoCard = ({todo}) => {
    const { todoList, setTodoList } = React.useContext(TodosContext);
    const { groupPercentage, getGroupById } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);
    const [ openMenu, setOpenMenu ] = React.useState(false);

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

    const group = getGroupById(todo.connectedGroup);

    return (
        <>
            <CardContainer>
                <InfoContainer onClick={() => setOpenMenu(!openMenu)}>
                    <p className="details">{todo.details}</p>
                    <p className="creationDate">{todo.creationDate}</p>
                </InfoContainer>
                <SelectorContainer>
                    {group
                        ? (<p>{group.name} • {groupPercentage(group.id)}%</p>)
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