import React from 'react';

import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';

import { ProjectContext } from '../../Contexts/ProjectContext';

import {
    Center,
    ProjectsContainer,
    Project
} from './ProjectList.style';

const ProjectList = () => {
    const { projects, setProjects } = React.useContext(ProjectContext);

    const openProject = (projectId) => {
        setProjects(prev => ({
            current: projectId,
            list: prev.list
        }));
    }

    return (
        <Center>
            <ProjectsContainer>
                {projects.list.map(project => (
                    <Project key={project.id}>
                        <div className="select-rect">
                            <FiSettings className="icon" />
                        </div>
                        <div className="title-container" onClick={() => openProject(project.id)}>
                            <p className="project-name">{project.name}</p>
                            <p className="creation-date">{project.creationDate}</p>
                        </div>
                        <div className="delete-rect">
                            <RiDeleteBin2Line className="icon" />
                        </div>
                    </Project>
                ))}
            </ProjectsContainer>
            <div className="add-project">
                New Project
            </div>
        </Center>
    )
}

export default ProjectList;