import React from 'react';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';
import { NotificationsContext } from '../Contexts/NotificationsContext';
import { TodosContext } from '../Contexts/TodoContext';

import {
    MenuContainer,
    MenuHeader,
    MenuBody,
    TodoSettings,
    LinkCheckbox
} from './TodoMenu.style';

const TodoMenu = ({todo, setOpenMenu}) => {
    const [ linkCheck, setLinkCheck ] = React.useState(todo.connectedGroup !== null);

    const { setTodoList } = React.useContext(TodosContext);
    const { groupNames, getGroupById } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();
    const linkGroupRef = React.useRef();

    const saveChanges = () => {
        const newName = nameRef.current.value === "" ? todo.details : nameRef.current.value;

        addNotification("valid", `Changes made to '${newName}' has been saved.`);
        setTodoList(prev => {
            const foundTodo = prev.find(value => value.id === todo.id);
            foundTodo.details = newName;
            foundTodo.description = descriptionRef.current.value;
            if (linkCheck && linkGroupRef.current.value)
                foundTodo.connectedGroup = linkGroupRef.current.value;
            else
                foundTodo.connectedGroup = null;
            return prev;
        });
    }

    return (
        <MenuContainer>
            <MenuHeader>
                <div className="names">
                    <p className="details">Todo settings</p>
                </div>
                <button className="closeButton" onClick={() => setOpenMenu(false)}>✖</button>
            </MenuHeader>
            <MenuBody>
                <TodoSettings>
                    <div className="setting">
                        <p className="setting-name">Name</p>
                        <input ref={nameRef} className="setting-input" defaultValue={todo.details} />
                    </div>
                    <div className="setting">
                        <p className="setting-name">Description</p>
                        <textarea ref={descriptionRef} className="setting-input" defaultValue={todo.description} />
                    </div>
                    <div className="setting">
                        <p className="setting-name">Link to group</p>
                        <div className="linkGroup">
                            <LinkCheckbox checked={linkCheck} onClick={() => setLinkCheck(!linkCheck)}><p>✓</p></LinkCheckbox>
                            <select ref={linkGroupRef} value={todo.connectedGroup} disabled={!linkCheck}>
                                {groupNames.list.map((group, id) => {
                                    if (todo.group === group.id)
                                        return null;
                                    return <option key={id} value={group.id}>{group.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </TodoSettings>
                <button className="saveButton" onClick={saveChanges}>Save changes</button>
            </MenuBody>
        </MenuContainer>
    );
}

export default TodoMenu;