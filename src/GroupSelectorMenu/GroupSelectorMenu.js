import React from 'react';

import {GroupNamesContext} from '../Contexts/GroupNamesContext';
import AddGroupInput from '../AddGroupInput/AddGroupInput';

import {
    Relativer,
    MenuContainer,
    RemoveButton,
    GroupName,
    ButtonContainer,
    MoveButton
} from './GroupSelectorMenu.style';
import { NotificationsContext } from '../Contexts/NotificationsContext';
import { TodosContext } from '../Contexts/TodoContext';

const GroupSelectorMenu = ({setOpen}) => {
    const { groupNames, setGroupNames } = React.useContext(GroupNamesContext);
    const { setTodoList } = React.useContext(TodosContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const handleGroup = (group, action) => {
        if (action === "remove") {
            addNotification("valid", `'${group.name}' group has been deleted.`);
            setGroupNames(prev => {
                const newList = prev.list.filter(value => value.name !== group.name);
                
                return {
                    current: (prev.current === group.name ? newList[0] : prev.current),
                    list: newList
                };
            });
            setTodoList(prev => prev.filter(value => value.group !== group.id));
            return;
        }

        addNotification("valid", `'${group.name}' is now the default group`);
        setGroupNames({
            current: group.id,
            list: groupNames.list
        });
        setOpen(false);
    }

    const swapGroup = (id, direction) => {
        if ((id === 0 && direction === "up") || (id === groupNames.list.length - 1 && direction === "down"))
            return;
        
        addNotification("valid", `Group '${groupNames.list[id].name}' has moved ${direction}.`);
        setGroupNames(prev => {
            const listCopy = [...prev.list];

            const tmp = listCopy[id];
            if (direction === "up") {
                listCopy[id] = listCopy[id - 1];
                listCopy[id - 1] = tmp;
            }
            else if (direction === "down") {
                listCopy[id] = listCopy[id + 1];
                listCopy[id + 1] = tmp;
            }
            return {
                current: prev.current,
                list: listCopy
            };
        });
    }

    return (
        <Relativer>
            <MenuContainer>
                <p className="title">Select default group</p>
                <div className="content">
                    {groupNames.list.map((group, id) => (
                        <GroupName key={id} isSelected={groupNames.current === group.id}>
                            <p onClick={() => handleGroup(group, "change")}>
                                {group.name}
                            </p>
                            <ButtonContainer>
                                <MoveButton className="moveButton" onClick={() => swapGroup(id, "up")}>🠉</MoveButton>
                                <MoveButton className="moveButton" onClick={() => swapGroup(id, "down")}>🠋</MoveButton>
                                <RemoveButton onClick={() => handleGroup(group, "remove")}>X</RemoveButton>
                            </ButtonContainer>
                        </GroupName>
                    ))}
                </div>
                <AddGroupInput className="addInput" />
            </MenuContainer>
        </Relativer>
    );
};


export default GroupSelectorMenu;