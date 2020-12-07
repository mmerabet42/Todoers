import React from 'react';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [groupNames, setGroupNames] = React.useState({
        current: "Main",
        list: ["Main", "Other long group name"]
    });

    return (
        <GroupNamesContext.Provider value={[groupNames, setGroupNames]} style={{height: "100%"}}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};