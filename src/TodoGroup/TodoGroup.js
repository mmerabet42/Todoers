import React from 'react';

import {
    GroupTitle,
    TitleContainer,
    Separator,
    ExpandArrow,
    Percentage
} from './TodoGroup.style';

import TodoCard from '../TodoCard/TodoCard';


const TodoGroup = ({isCurrent, group, list}) => {
    const todosDone = (list.filter(value => value.done).length / (list.length ? list.length : 1)) * 100;

    return (
        <div>
            <TitleContainer>
                <GroupTitle isCurrent={isCurrent}>{group}</GroupTitle>
                <Percentage>{todosDone.toFixed(1)}%</Percentage>
            </TitleContainer>
            {list.map((todo, id) => (
                <TodoCard key={id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoGroup;