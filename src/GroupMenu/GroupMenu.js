import React from 'react';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';
import { NotificationsContext } from '../Contexts/NotificationsContext';
import { TodosContext } from '../Contexts/TodoContext';

import {
    MenuContainer,
    MenuHeader,
    MenuBody,
    TodoSettings,
    StyledButton
} from './GroupMenu.style';

import ConnectedTodos from './ConnectedTodos/ConnectedTodos';

const GroupMenu = ({group, setOpenMenu}) => {
    const { groupNames, setGroupNames } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const saveChanges = () => {
        const formatted = nameRef.current.value.trim();
        if (groupNames.list.find(value => value.name === formatted)) {
            addNotification("error", "Group name already taken.");
            return;
        }

        const newName = formatted === "" ? group.name : formatted;

        addNotification("valid", `Changes made to group '${newName}' has been saved.`);
        setGroupNames(prev => {
            const foundGroup = prev.list.find(value => value.id === group.id);
            foundGroup.name = newName;
            foundGroup.description = descriptionRef.current.value;
            return {
                current: prev.current,
                list: prev.list
            };
        });
    }

    return (
        <MenuContainer>
            <MenuHeader>
                <div className="names">
                    <p className="details">Group settings</p>
                </div>
                <button className="closeButton" onClick={() => setOpenMenu(false)}>✖</button>
            </MenuHeader>
            <MenuBody>
                <TodoSettings>
                    <div className="setting">
                        <p className="setting-name">Name</p>
                        <input ref={nameRef} className="setting-input" defaultValue={group.name} />
                    </div>
                    <div className="setting">
                        <p className="setting-name">Description</p>
                        <textarea ref={descriptionRef} className="setting-input" defaultValue={group.description} />
                    </div>
                    <div className="setting">
                        <StyledButton color="#539BDF">Set current</StyledButton>
                    </div>
                    <div className="setting">
                        <ConnectedTodos group={group} />
                    </div>
                    {/* <div className="setting">
                        <StyledButton color="#539BDF">Change prout</StyledButton>
                    </div> */}
                </TodoSettings>
                <StyledButton margin="20px" color="#539BDF" onClick={saveChanges}>Save changes</StyledButton>
            </MenuBody>
        </MenuContainer>
    );
}

export default GroupMenu;