import React from 'react';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';
import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { ProjectContext } from '../../Contexts/ProjectContext';

import {
    MenuContainer,
    MenuHeader,
    MenuBody,
    TodoSettings,
    StyledButton
} from './GroupMenu.style';

import ConnectedTodos from './ConnectedTodos/ConnectedTodos';

const GroupMenu = ({group, setOpenMenu}) => {
    const { setProjects } = React.useContext(ProjectContext);
    const { groupNames, setGroupNames, deleteGroup } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const saveChanges = () => {
        const formatted = nameRef.current.value.trim();
        if (groupNames.find(value => value.name === formatted && value.id !== group.id))
            return addNotification("error", "Group name already taken.");

        const newName = formatted === "" ? group.name : formatted;

        addNotification("valid", `Changes made to group '${newName}' has been saved.`);
        setGroupNames(prev => {
            const copyPrev = [...prev];
            const foundGroup = copyPrev.find(value => value.id === group.id);
            foundGroup.name = newName;
            foundGroup.description = descriptionRef.current.value;
            return copyPrev;
        });
    }

    const setDefaultGroup = () => {
        setProjects(prev => {
            const copyProjects = [...prev.list];
            const project = copyProjects.find(valueElement => valueElement.id === prev.current);
            project.current = group.id;
            
            return {
                current: prev.current,
                list: copyProjects
            };
        });

        addNotification("valid", `'${group.name}' is now the default group`);
    }

    const moveOnTop = () => {
        setGroupNames(prev => {
            const groupIndex = prev.findIndex(value => value.id === group.id);
            const copyList = [...prev];
            const firstPart = copyList.splice(0, groupIndex);
            copyList.shift();

            return [group, ...firstPart, ...copyList];
        });
        
        addNotification("valid", `Group '${group.name}' is now on top.`);
    }

    const handleDeleteGroup = () => {
        setOpenMenu(false);
        addNotification("valid", `'${group.name}' group has been deleted.`);
        deleteGroup(group);
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
                        <StyledButton color="#FF5A5F" onClick={handleDeleteGroup}>Delete group</StyledButton>
                    </div>
                </TodoSettings>
                <StyledButton margin="20px" color="#539BDF" onClick={saveChanges}>Save changes</StyledButton>
            </MenuBody>
        </MenuContainer>
    );
}

export default GroupMenu;