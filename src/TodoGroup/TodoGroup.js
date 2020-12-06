import React from 'react';

import {
    GroupTitle,
    TitleContainer,
    Separator,
    ExpandArrow
} from './TodoGroup.style';

import TodoCard from '../TodoCard/TodoCard';


const TodoGroup = ({group, list}) => {
    return (
        <div>
            <TitleContainer>
                <GroupTitle><strong>{group}</strong></GroupTitle>
                <Separator/>
            </TitleContainer>
            {list.map((todo, id) => (
                <TodoCard key={id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoGroup;