import React, {useContext} from 'react';
import { TodosContext } from '../Contexts/TodoContext';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';

import TodoGroup from '../TodoGroup/TodoGroup';

import {
    TodosContainer
} from './TodoList.style';

const TodoList = () => {
    const [todoList, setTodoList] = useContext(TodosContext);
    const [groupNames, setGroupNames] = useContext(GroupNamesContext);

    return (
        <TodosContainer>
            {groupNames.list.map((group, id) => (
                <TodoGroup key={id} isCurrent={groupNames.current === group} group={group} list={todoList.filter(value => value.group === group)} />
            ))}
        </TodosContainer>   
    );
}   

export default TodoList;