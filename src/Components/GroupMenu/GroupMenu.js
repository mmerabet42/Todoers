import React from 'react';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';
import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { TodosContext } from '../../Contexts/TodoContext';

import {
    MenuContainer,
    MenuHeader,
    MenuBody,
    TodoSettings,
    StyledButton
} from './GroupMenu.style';

import ConnectedTodos from './ConnectedTodos/ConnectedTodos';

const GroupMenu = ({group, setOpenMenu}) => {
    const { groupNames, setGroupNames, deleteGroupById } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const saveChanges = () => {
        const formatted = nameRef.current.value.trim();
        if (groupNames.list.find(value => value.name === formatted && value.id !== group.id)) {
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

    const setDefaultGroup = () => {
        addNotification("valid", `'${group.name}' is now the default group`);
        setGroupNames(prev => ({
            current: group.id,
            list: prev.list
        }));
    }

    const moveOnTop = () => {
        addNotification("valid", `Group '${group.name}' is now on top.`);
        setGroupNames(prev => {
            const groupIndex = prev.list.findIndex(value => value.id === group.id);
            const copyList = [...prev.list];
            const firstPart = copyList.splice(0, groupIndex);
            copyList.shift();
            
            return {
                current: prev.current,
                list: [group, ...firstPart, ...copyList]
            }
        })
    }

    const deleteGroup = () => {
        setOpenMenu(false);
        addNotification("valid", `'${group.name}' group has been deleted.`);
        deleteGroupById(group.id);
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
                        <ConnectedTodos group={group} />
                    </div>
                    <div className="setting">
                        <StyledButton color="#539BDF" onClick={setDefaultGroup}>Set default group</StyledButton>
                    </div>
                    <div className="setting">
                        <StyledButton color="#539BDF" onClick={moveOnTop}>Move on top</StyledButton>
                    </div>
                    <div className="setting">
                        <StyledButton color="#FF5A5F" onClick={deleteGroup}>Delete group</StyledButton>
                    </div>
                </TodoSettings>
                <StyledButton margin="20px" color="#539BDF" onClick={saveChanges}>Save changes</StyledButton>
            </MenuBody>
        </MenuContainer>
    );
}

export default GroupMenu;