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
    const { setGroupNames, groupPercentage } = React.useContext(GroupNamesContext);

    const [ openMenu, setOpenMenu ] = React.useState(false);

    const showTodos = async () => {
        await setGroupNames(prev => prev);
        setGroupNames(prev => {
            const copyPrev = [...prev];
            const foundGroup = copyPrev.find(valueElement => valueElement.id === group.id);
            foundGroup.showTodos = !foundGroup.showTodos;
            return copyPrev;
        });
    }

    return (
        <>
            <TitleContainer show={group.showTodos}>
                <div className="nameContainer" onClick={() => setOpenMenu(!openMenu)}>
                    <GroupTitle isCurrent={isCurrent}>{group.name}</GroupTitle>
                </div>
                <div className="showTodosToggle" onClick={showTodos}>
                    <p className="arrowhead">⮟</p>
                </div>
                <p className="percentage">{groupPercentage(group.id)}%</p>
            </TitleContainer>
            {group.showTodos && list.map((todo, id) => (
                <TodoCard key={id} todo={todo}/>
            ))}
            { openMenu && <ShadowMask onClick={() => setOpenMenu(!openMenu)}>
                <GroupMenu setOpenMenu={setOpenMenu} group={group} />
            </ShadowMask> }
        </>
    );
}

export default TodoGroup;