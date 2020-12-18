import React from 'react';

import {GroupNamesContext} from '../../Contexts/GroupNamesContext';
import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { ProjectContext } from '../../Contexts/ProjectContext';

import AddGroupInput from '../AddGroupInput/AddGroupInput';

import {
    Relativer,
    MenuContainer,
    RemoveButton,
    GroupName,
    ButtonContainer,
    MoveButton
} from './GroupSelectorMenu.style';

const GroupSelectorMenu = ({setOpen}) => {
    const { groupNames, setGroupNames, deleteGroup } = React.useContext(GroupNamesContext);
    const { projects, setProjects, getProjectById } = React.useContext(ProjectContext);
    const { addNotification } = React.useContext(NotificationsContext);

    const handleGroup = async (group, action) => {
        if (action === "remove") {
            addNotification("valid", `'${group.name}' group has been deleted.`);
            deleteGroup(group);
            return;
        }

        setProjects(prev => {
            const copyProjects = [...prev.list];
            const project = copyProjects.find(valueElement => valueElement.id === projects.current);
            project.current = group.id;
            return {
                current: prev.current,
                list: copyProjects
            };

        });
        addNotification("valid", `'${group.name}' is now the default group`);
        
        setOpen(false);
    }

    const swapGroup = (id, direction) => {
        setGroupNames(prev => {
            const listCopy = [...prev];
            const groupIndex = listCopy.findIndex(valueElement => valueElement.id === id);
            let targetIndex = 0;
            
            if (direction === "up") {
                if ((targetIndex = groupIndex) === 0)
                    return listCopy;
                while (--targetIndex >= 0)
                    if (listCopy[targetIndex].projectId === projects.current)
                        break;
            }
            else if (direction === "down") {
                if ((targetIndex = groupIndex) === groupNames.filter(valueElement => valueElement.projectId === projects.current).length - 1)
                    return listCopy;
                while (++targetIndex < groupNames.length)
                    if (listCopy[targetIndex].projectId === projects.current)
                        break;
            }
            const tmp = listCopy[groupIndex];
            listCopy[groupIndex] = listCopy[targetIndex];
            listCopy[targetIndex] = tmp;

            addNotification("valid", `Group '${tmp.name}' has moved ${direction}.`);
            return listCopy;
        });
    }

    return (
        <Relativer>
            <MenuContainer>
                <p className="title">Select default group</p>
                <div className="content">
                    {groupNames.filter(valueElement => valueElement.projectId === projects.current).map((group) => (
                        <GroupName key={group.id} isSelected={getProjectById(projects.current).current === group.id}>
                            <p onClick={() => handleGroup(group, "change")}>
                                {group.name}
                            </p>
                            <ButtonContainer>
                                <MoveButton className="moveButton" onClick={() => swapGroup(group.id, "up")}>🠉</MoveButton>
                                <MoveButton className="moveButton" onClick={() => swapGroup(group.id, "down")}>🠋</MoveButton>
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