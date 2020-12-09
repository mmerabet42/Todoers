import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';
import { NotificationsContext } from '../Contexts/NotificationsContext';

import {
    InputContainer,
    NameInput,
    NewGroupButton
} from './AddGroupInput.style';

const AddGroupInput = () => {
    const { groupNames, setGroupNames } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);
    const inputRef = React.useRef();

    const addGroup = () => {
        if (inputRef.current.value === "") {
            addNotification("error", "Group name cannot be empty.");
            return;
        }
        else if (groupNames.list.find(value => value.name === inputRef.current.value)) {
            addNotification("error", `Group '${inputRef.current.value}' already exists.`);
            return;
        }

        const value = {
            name: inputRef.current.value,
            id: uuidv4()
        };
        addNotification("valid", `Group '${value}' has been added.`);
        setGroupNames(prev => {
            const newList = [...prev.list, value];
            const newCurrent = (prev.list.length ? prev.current : value.id);
            inputRef.current.value = ""; 

            return {
                current: newCurrent,
                list: newList
            }
        });
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