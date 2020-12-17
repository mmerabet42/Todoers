import React from 'react';
import { projectContext } from '../DefaultValues/Default';

export const ProjectContext = React.createContext();

export const ProjectProvider = props => {
    const [ projects, setProjects ] = React.useState(projectContext);

    const value = {
        projects,
        setProjects
    };

    return (
        <ProjectContext.Provider value={value}>
            {props.children}
        </ProjectContext.Provider>
    )
}