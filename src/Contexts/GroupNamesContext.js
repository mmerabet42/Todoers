import React from 'react';

export const GroupNamesContext = React.createContext();

export const GroupNamesProvider = props => {
    const [groupNames, setGroupNames] = React.useState({
        current: "Main",
        list: ["Main", "Other and another"]
    });

    return (
        <GroupNamesContext.Provider value={[groupNames, setGroupNames]}>
            {props.children}
        </GroupNamesContext.Provider>
    );
};