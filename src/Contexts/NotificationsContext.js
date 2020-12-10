import React from 'react';
import {v4 as uuidv4} from 'uuid';

export const NotificationsContext = React.createContext();

export const NotificationsProvider = (props) => {
    const [ notifications, setNotifications ] = React.useState([]);

    const addNotification = (level, message) => {
        const id = uuidv4();
        const timeoutId = setTimeout(() => setNotifications(prev => prev.filter(value => value.id !== id)), 4000);

        setNotifications(prev => {
            if (prev.length > 7)
                prev.shift();
            return [...prev, {
                id: id,
                timeoutId: timeoutId,
                level: level,
                message: message
            }]
        });
    }

    const removeNotification = (notificationId) => {
        setNotifications(prev => prev.filter(value => {
            if (value.id === notificationId) {
                clearTimeout(value.timeoutId);
                return false;
            }
            return true;
        }));
    }

    return (
        <NotificationsContext.Provider value={{notifications, setNotifications, addNotification, removeNotification}}>
            {props.children}
        </NotificationsContext.Provider>
    );
};