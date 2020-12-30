import React from 'react';

import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { FiChevronLeft } from "react-icons/fi";

import ShadowMask from '../ShadowMask/ShadowMask';

import { ProjectContext } from '../../Contexts/ProjectContext';

import {
    Center,
    ProjectsContainer,
    Project,
    CenterMenu,
    NewProjectContainer
} from './ProjectList.style';
import { NotificationsContext } from '../../Contexts/NotificationsContext';
import { getDate } from '../../Utils/getDate';
import { v4 as uuidv4 } from 'uuid';

const ProjectList = () => {
    const [ openMenu1, setOpenMenu1 ] = React.useState(null);
    const [ openMenu, setOpenMenu ] = React.useState(false);
    const { addNotification } = React.useContext(NotificationsContext);
    const { projects, setProjects, deleteProjectById } = React.useContext(ProjectContext);

    const openProject = (projectId) => {
        setProjects(prev => ({
            current: projectId,
            list: prev.list
        }));
    }

    const deleteProject = (project) => {
        deleteProjectById(project.id);
        addNotification("valid", `Project '${project.name}' has been deleted successfully.`)
    }

    return (
        <Center>
            <ProjectsContainer>
                {projects.list.map(project => (
                    <Project key={project.id}>
                        <div className="select-rect" onClick={() => setOpenMenu1(project)}>
                            <FiSettings className="icon" />
                        </div>
                        <div className="title-container" onClick={() => openProject(project.id)}>
                            <p className="project-name">{project.name}</p>
                            <p className="creation-date">{project.creationDate}</p>
                        </div>
                        <div className="delete-rect" onClick={() => deleteProject(project)}>
                            <RiDeleteBin2Line className="icon" />
                        </div>
                    </Project>
                ))}
            </ProjectsContainer>    
            <div className="add-project" onClick={() => setOpenMenu(!openMenu)}>
                New Project
            </div>
            { openMenu && <NewProjectMenu setOpenMenu={setOpenMenu} /> }
            { openMenu1 && <SettingsMenu setOpenMenu={setOpenMenu1} project={openMenu1} /> }
        </Center>
    )
}

const NewProjectMenu = ({setOpenMenu}) => {
    const { projects, setProjects } = React.useContext(ProjectContext)
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const addProject = () => {
        if (nameRef.current.value === "")
            return addNotification("error", "Project name cannot be empty.");
        else if (projects.list.find(value => value.name === nameRef.current.value))
            return addNotification("error", "Project name already exists.");

        setProjects(prev => ({
            current: prev.current,
            list: [...prev.list, {
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                creationDate: getDate(),
                id: uuidv4()
            }]
        }));
        setOpenMenu(false);
    }

    return (
        <ShadowMask onClick={() => setOpenMenu(false)} color={"#D5D5D555"}>
            <NewProjectContainer>
                <div className="menu-container">
                    <div className="header" onClick={() => setOpenMenu(false)}>
                        <FiChevronLeft />
                        <p>Create a new project</p>
                    </div>
                    <div className="body">
                        <div className="input">
                            <p>Name</p>
                            <input ref={nameRef} className="field" />
                        </div>
                        <div className="input">
                            <p>Description</p>
                            <textarea ref={descriptionRef} className="field" />
                        </div>
                    </div>
                    <button onClick={addProject} className="add-button">Create project</button>
                </div>
            </NewProjectContainer>
        </ShadowMask>
    );
}


const SettingsMenu = ({setOpenMenu, project}) => {
    const { projects, setProjects } = React.useContext(ProjectContext)
    const { addNotification } = React.useContext(NotificationsContext);

    const nameRef = React.useRef();
    const descriptionRef = React.useRef();

    const saveChanges = () => {
        if (nameRef.current.value === "")
            return addNotification("error", "Project name cannot be empty.");
        else if (projects.list.find(value => value.id !== project.id && value.name === nameRef.current.value))
            return addNotification("error", "Project name already exists.");

        setProjects(prev => {
            const newList = [...prev.list];
            const proj = newList.find(value => value.id === project.id);

            proj.name = nameRef.current.value;
            proj.description = descriptionRef.current.value;
            return {
                current: prev.current,
                list: newList
            };
        });
        addNotification("valid", `Changes made to '${nameRef.current.value}' has been saved.`);
        setOpenMenu(null);
    }

    return (
        <ShadowMask onClick={() => setOpenMenu(null)} color={"#D5D5D555"}>
            <NewProjectContainer>
                <div className="menu-container">
                    <div className="header" onClick={() => setOpenMenu(null)}>
                        <FiChevronLeft />
                        <p>Project settings</p>
                    </div>
                    <div className="body">
                        <div className="input">
                            <p>Name</p>
                            <input ref={nameRef} className="field" defaultValue={project.name} />
                        </div>
                        <div className="input">
                            <p>Description</p>
                            <textarea ref={descriptionRef} className="field" defaultValue={project.description} />
                        </div>
                    </div>
                    <button onClick={saveChanges} className="add-button">Save changes</button>
                </div>
            </NewProjectContainer>
        </ShadowMask>
    );
}

export default ProjectList;