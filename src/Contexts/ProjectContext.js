import React from 'react';
import { projectContext } from '../DefaultValues/Default';

export const ProjectContext = React.createContext();

export const ProjectProvider = props => {
    const [ projects, setProjects ] = React.useState(projectContext);

    const getProjectById = (projectId) => {
        return projects.list.find(value => value.id === projectId);
    }

    const value = {
        projects,
        setProjects,
        getProjectById
    };

    return (
        <ProjectContext.Provider value={value}>
            {props.children}
        </ProjectContext.Provider>
    )
}