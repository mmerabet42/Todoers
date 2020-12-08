import React from 'react';

import {
    GroupTitle,
    TitleContainer,
    Separator,
    ExpandArrow,
    Percentage
} from './TodoGroup.style';

import TodoCard from '../TodoCard/TodoCard';
import { GroupNamesContext } from '../Contexts/GroupNamesContext';


const TodoGroup = ({isCurrent, group, list}) => {
    const [show, setShow] = React.useState(true);
    const [{}, {}, groupPercentage] = React.useContext(GroupNamesContext);

    return (
        <div>
            <TitleContainer onClick={() => setShow(!show)} show={show}>
                <div className="nameContainer">
                    <GroupTitle isCurrent={isCurrent}>{group}</GroupTitle>
                    <p className="arrowhead">⮟</p>
                </div>
                <Percentage>{groupPercentage(group)}%</Percentage>
            </TitleContainer>
            {show && list.map((todo, id) => (
                <TodoCard key={id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoGroup;