import React from 'react';

import {
    GroupTitle,
    TitleContainer,
} from './TodoGroup.style';

import TodoCard from '../TodoCard/TodoCard';
import { GroupNamesContext } from '../../Contexts/GroupNamesContext';
import ShadowMask from '../ShadowMask/ShadowMask';
import GroupMenu from '../GroupMenu/GroupMenu';

const TodoGroup = ({isCurrent, group, list}) => {
    const { groupPercentage } = React.useContext(GroupNamesContext);

    const [ show, setShow ] = React.useState(true);
    const [ openMenu, setOpenMenu ] = React.useState(false);

    return (
        <>
            <TitleContainer show={show}>
                <div className="nameContainer" onClick={() => setOpenMenu(!openMenu)}>
                    <GroupTitle isCurrent={isCurrent}>{group.name}</GroupTitle>
                </div>
                <div className="showTodosToggle" onClick={() => setShow(!show)}>
                    <p className="arrowhead">⮟</p>
                </div>
                <p className="percentage">{groupPercentage(group.id)}%</p>
            </TitleContainer>
            {show && list.map((todo, id) => (
                <TodoCard key={id} todo={todo}/>
            ))}
            { openMenu && <ShadowMask onClick={() => setOpenMenu(!openMenu)}>
                <GroupMenu setOpenMenu={setOpenMenu} group={group} />
            </ShadowMask> }
        </>
    );
}

export default TodoGroup;