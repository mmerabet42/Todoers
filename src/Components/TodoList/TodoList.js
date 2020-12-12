import React, {useContext} from 'react';

import { TodosContext } from '../../Contexts/TodoContext';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';

import TodoGroup from '../TodoGroup/TodoGroup';

import {
    TodosContainer,
    NoTodos
} from './TodoList.style';

const TodoList = () => {
    const { todoList } = useContext(TodosContext);
    const { groupNames } = useContext(GroupNamesContext);

    return (
        <TodosContainer>
            {groupNames.list.length ? groupNames.list.map((group) => (
                <TodoGroup key={group.id} isCurrent={groupNames.current === group.id} group={group} list={todoList.filter(value => value.group === group.id)} />
            )) : <NoTodos><p>There are no todos yet.</p></NoTodos>}
        </TodosContainer>   
    );
}

export default TodoList;