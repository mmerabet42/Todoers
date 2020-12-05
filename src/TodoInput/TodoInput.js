import React, {useContext, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';

import {TodoContext} from '../Contexts/TodoContext';

import { 
    InputContainer,
    StyledInput,
    StyledButton
} from './TodoInput.style';

const TodoInput = () => {
    const [todoList, setTodoList] = useContext(TodoContext);
    const inputNameRef = useRef();

    const addTodo = async () => {
        if (inputNameRef.current.value === "")
            return;
            
        await setTodoList(prev => [{
            id: uuidv4(),
            details: inputNameRef.current.value,
            done: false
        }, ...prev]);
        inputNameRef.current.value = "";
    }

    return (
        <InputContainer>
            <StyledInput className="todo-input" placeholder="New Todo..." ref={inputNameRef} />
            <StyledButton onClick={addTodo}>
                Add
            </StyledButton>
        </InputContainer>
            
    );
};

export default TodoInput;

// FEEFE5
