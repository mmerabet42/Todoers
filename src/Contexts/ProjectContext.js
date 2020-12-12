import React from 'react';

export const ProjectContext = React.createContext();

export const ProjectProvider = props => {
    return (
        <ProjectContext.Provider>
            {props.children}
        </ProjectContext.Provider>
    )
}