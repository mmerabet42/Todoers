import React, { useContext } from 'react';

import {GroupNamesContext} from '../Contexts/GroupNamesContext';

import {
    Relativer,
    MenuContainer
} from './GroupSelectorMenu.style';

const GroupSelectorMenu = ({setOpen}) => {
    const [groupNames, setGroupNames] = useContext(GroupNamesContext);

    const handleGroupChange = newName => {
        setGroupNames({
            current: newName,
            list: groupNames.list
        });
        setOpen(false);
    }

    return (
        <Relativer>
            <MenuContainer>
                {groupNames.list.map((group, id) => (
                    <div key={id} className="groupNameContainer">
                        <p
                            className={group === groupNames.current ? "selectedGroup" : "groupName"}
                            onClick={() => handleGroupChange(group)}
                        >
                            {group}
                        </p>
                    </div>
                ))}
            </MenuContainer>
        </Relativer>
    );
};

export default GroupSelectorMenu;