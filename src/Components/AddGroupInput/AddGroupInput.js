import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';
import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { ProjectContext } from '../../Contexts/ProjectContext';

import {
    InputContainer,
    NameInput,
    NewGroupButton
} from './AddGroupInput.style';

const AddGroupInput = () => {
    const { projects, setProjects } = React.useContext(ProjectContext);
    const { groupNames, setGroupNames } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);
    const inputRef = React.useRef();

    const addGroup = () => {
        const formatted = inputRef.current.value.trim();

        if (formatted === "")
            return addNotification("error", "Group name cannot be empty.");
        else if (groupNames.find(value => value.name === formatted && value.projectId == projects.current))
            return addNotification("error", `Group '${formatted}' already exists.`);

        const value = {
            name: formatted,
            id: uuidv4(),
            projectId: projects.current
        };

        if (groupNames.filter(valueElement => valueElement.projectId === projects.current).length === 0) {
            setProjects(prev => {
                const copyProjects = [...projects.list];
                const project = copyProjects.find(valueElement => valueElement.id === projects.current);

                project.current = value.id;
                return {
                    current: projects.current,
                    list: copyProjects
                };
            })
        }

        inputRef.current.value = "";
        setGroupNames(prev => [...prev, value]);
        addNotification("valid", `Group '${value.name}' has been added.`);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter")
            addGroup();
    }

    return (
        <InputContainer>
            <NameInput ref={inputRef} placeholder="New group..." onKeyDown={onKeyDown} />
            <NewGroupButton onClick={addGroup}>New</NewGroupButton>
        </InputContainer>
    );
}

export default AddGroupInput;