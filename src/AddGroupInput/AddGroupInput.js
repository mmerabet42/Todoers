import React from 'react';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';
import { NotificationsContext } from '../Contexts/NotificationsContext';

import {
    InputContainer,
    NameInput,
    NewGroupButton
} from './AddGroupInput.style';

const AddGroupInput = () => {
    const [groupNames, setGroupNames] = React.useContext(GroupNamesContext);
    const [{}, {}, addNotification] = React.useContext(NotificationsContext);
    const inputRef = React.useRef();

    const addGroup = () => {
        if (inputRef.current.value === "" || groupNames.list.includes(inputRef.current.value))
            return;
        
        const value = inputRef.current.value;
        addNotification("valid", `Group '${value}' has been added.`);
        setGroupNames(prev => {
            const newList = [...prev.list, value];
            const newCurrent = (prev.list.length ? prev.current : value);
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