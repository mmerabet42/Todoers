import React, {useContext, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../Utils/getDate';

import {TodosContext} from '../Contexts/TodoContext';
import {GroupNamesContext} from '../Contexts/GroupNamesContext';

import { 
    InputContainer,
    StyledInput,
    StyledButton,
    Relativer,
    ChangeGroupButton
} from './TodoInput.style';
import ShadowMask from '../ShadowMask/ShadowMask';

import GroupSelectorMenu from '../GroupSelectorMenu/GroupSelectorMenu';
import { NotificationsContext } from '../Contexts/NotificationsContext';
import { CSSTransition } from 'react-css-transition';

const TodoInput = () => {
    const [todoList, setTodoList] = React.useContext(TodosContext);
    const [groupNames, setGroupNames] = React.useContext(GroupNamesContext);
    const [{}, {}, addNotification] = React.useContext(NotificationsContext);

    const [open, setOpen] = useState(false);

    const inputNameRef = useRef();

    const onKeyDown = (e) => {
        if (e.key === 'Enter')
            addTodo();
    }

    const addTodo = async () => {
        if (inputNameRef.current.value === "")
            return;
        else if (groupNames.current === undefined) {
            addNotification("error", "Cannot add todo because there are no selected groups");
            return;
        }

        addNotification("valid", `Todo '${inputNameRef.current.value}' has been added to group '${groupNames.current}'.`);
        await setTodoList(prev => [{
            group: groupNames.current,
            connectedGroup: null,
            id: uuidv4(),
            details: inputNameRef.current.value,
            done: false,
            creationDate: getDate()
        }, ...prev]);
        inputNameRef.current.value = "";
    }

    return (
        <InputContainer>
            <StyledInput className="todo-input" placeholder="New Todo..." ref={inputNameRef} onKeyDown={onKeyDown} />
            <StyledButton onClick={addTodo}>
                New
            </StyledButton>
            <ChangeGroupButton onClick={() => setOpen(!open)}>
                ▼
            </ChangeGroupButton>
            {open && <ShadowMask onClick={() => setOpen(false)}>
                <GroupSelectorMenu setOpen={setOpen} />
            </ShadowMask>}
        </InputContainer> 
    );
};

export default TodoInput;

// FEEFE5
