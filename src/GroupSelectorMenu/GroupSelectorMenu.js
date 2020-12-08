import React, { useContext } from 'react';

import {GroupNamesContext} from '../Contexts/GroupNamesContext';
import AddGroupInput from '../AddGroupInput/AddGroupInput';

import {
    Relativer,
    MenuContainer,
    RemoveButton,
} from './GroupSelectorMenu.style';
import { NotificationsContext } from '../Contexts/NotificationsContext';
import { TodosContext } from '../Contexts/TodoContext';

const GroupSelectorMenu = ({setOpen}) => {
    const [groupNames, setGroupNames] = React.useContext(GroupNamesContext);
    const [{}, setTodos] = React.useContext(TodosContext);
    const [{}, {}, addNotification] = React.useContext(NotificationsContext);

    let orderCall = false;
    const handleGroup = (newName, from) => {
        if (orderCall === true) {
            orderCall = false;
            return;
        }
        if (from === "remove") {
            orderCall = true;

            addNotification("valid", `'${newName}' group has been deleted.`);
            setGroupNames(prev => {
                const newList = prev.list.filter(value => value !== newName);
                
                return {
                    current: (prev.current === newName ? newList[0] : prev.current),
                    list: newList
                };
            });
            setTodos(prev => prev.filter(value => value.group !== newName));
            return;
        }

        addNotification("valid", `'${newName}' is now the default group`);
        setGroupNames({
            current: newName,
            list: groupNames.list
        });
        setOpen(false);
    }

    return (
        <Relativer>
            <MenuContainer>
                <p>Select default group</p>
                {groupNames.list.map((group, id) => (
                    <div key={id} className="groupNameContainer">
                        <p
                            className={group === groupNames.current ? "selectedGroup" : "groupName"}
                            onClick={() => handleGroup(group, "change")}
                        >
                            {group}
                            <RemoveButton onClick={() => handleGroup(group, "remove")}>X</RemoveButton>
                        </p>
                    </div>
                ))}
                <AddGroupInput />
            </MenuContainer>
        </Relativer>
    );
};

export default GroupSelectorMenu;