import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDate } from '../../Utils/getDate';

import { TodosContext } from '../../Contexts/TodoContext';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';
import { NotificationsContext } from '../../Contexts/NotificationsContext';

import { 
    InputContainer,
    StyledInput,
    StyledButton,
    ChangeGroupButton
} from './TodoInput.style';
import ShadowMask from '../ShadowMask/ShadowMask';

import GroupSelectorMenu from '../GroupSelectorMenu/GroupSelectorMenu';
import { CSSTransition } from 'react-css-transition';

const TodoInput = () => {
    const { setTodoList } = React.useContext(TodosContext);
    const { groupNames, getGroupById } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const [ open, setOpen ] = React.useState(false);

    const inputNameRef = React.useRef();

    const onKeyDown = (e) => {
        if (e.key === 'Enter')
            addTodo();
    }

    const addTodo = async () => {
        const formatted = inputNameRef.current.value.trim();

        if (formatted === "") {
            addNotification("error", "Todo name cannot be empty.");
            return;
        }
        else if (!groupNames.current) {
            addNotification("error", "You must select a default group before adding todos.");
            return;
        }

        addNotification("valid", `Todo '${formatted}' has been added to group '${getGroupById(groupNames.current).name}'.`);
        await setTodoList(prev => [{
            group: groupNames.current,
            connectedGroup: null,
            id: uuidv4(),
            details: formatted,
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
