import React, {useContext, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../Utils/getDate';

import {TodosContext} from '../Contexts/TodoContext';
import {GroupNamesContext} from '../Contexts/GroupNamesContext';

import { 
    InputContainer,
    StyledInput,
    StyledButton,
    ChangeGroupButton
} from './TodoInput.style';

import GroupSelectorMenu from '../GroupSelectorMenu/GroupSelectorMenu';

const TodoInput = () => {
    const [todoList, setTodoList] = useContext(TodosContext);
    const [groupNames, setGroupNames] = useContext(GroupNamesContext);

    const [open, setOpen] = useState(false);

    const inputNameRef = useRef();

    const addTodo = async () => {
        if (inputNameRef.current.value === "")
            return;

        await setTodoList(prev => [{
            group: groupNames.current,
            id: uuidv4(),
            details: inputNameRef.current.value,
            done: false,
            creationDate: getDate()
        }, ...prev]);
        inputNameRef.current.value = "";
    }

    return (
        <InputContainer>
            <StyledInput className="todo-input" placeholder="New Todo..." ref={inputNameRef} />
            <StyledButton onClick={addTodo}>
                Add
            </StyledButton>
            <ChangeGroupButton onClick={() => setOpen(!open)}>
                Select Group
            </ChangeGroupButton>
            {open && <GroupSelectorMenu setOpen={setOpen} />}
        </InputContainer>
            
    );
};

export default TodoInput;

// FEEFE5
