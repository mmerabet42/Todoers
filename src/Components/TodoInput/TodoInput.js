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
import { ProjectContext } from '../../Contexts/ProjectContext';

const TodoInput = () => {
    const { setTodoList } = React.useContext(TodosContext);
    const { projects, getProjectById } = React.useContext(ProjectContext);
    const { groupNames, getGroupById } = React.useContext(GroupNamesContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const [ open, setOpen ] = React.useState(false);

    const inputNameRef = React.useRef();

    const onKeyDown = (e) => {
        if (e.key === 'Enter')
            addTodo();
    }

    const addTodo = () => {
        const formatted = inputNameRef.current.value.trim();
        const project = getProjectById(projects.current);
        inputNameRef.current.value = "";

        if (formatted === "") {
            addNotification("error", "Todo name cannot be empty.");
            return;
        }
        else if (project.current === null) {
            addNotification("error", "You must select a default group before adding todos.");
            return;
        }
        
        const newTodo = {
            group: project.current,
            connectedGroup: null,
            id: uuidv4(),
            details: formatted,
            done: false,
            creationDate: getDate()
        };
        
        setTodoList(prev => [newTodo, ...prev]);
        addNotification("valid", `Todo '${formatted}' has been added to group '${getGroupById(project.current).name}'.`);
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
