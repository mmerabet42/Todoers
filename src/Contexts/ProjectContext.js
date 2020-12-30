import React from 'react';
import { projectContext } from '../DefaultValues/Default';

export const ProjectContext = React.createContext();

export const ProjectProvider = props => {
    const [ projects, setProjects ] = React.useState(projectContext);

    const getProjectById = (projectId) => {
        return projects.list.find(value => value.id === projectId);
    }

    const deleteProjectById = (projectId) => {
        setProjects(prev => ({
            current: (prev.current === projectId ? null : prev.current),
            list: prev.list.filter(value => value.id !== projectId)
        }));
    }

    const value = {
        projects,
        setProjects,
        getProjectById,
        deleteProjectById
    };

    return (
        <ProjectContext.Provider value={value}>
            {props.children}
        </ProjectContext.Provider>
    )
}