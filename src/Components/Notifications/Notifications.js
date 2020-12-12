import React from 'react'
import { NotificationsContext } from '../../Contexts/NotificationsContext';

import {
    NotificationsContainer,
    NotificationContainer
} from './Notifications.style';

const Notifications = () => {
    const { notifications, removeNotification } = React.useContext(NotificationsContext);

    return (
        <NotificationsContainer>
            {notifications.map((notification) => {
                return (
                    <NotificationContainer key={notification.id} onClick={() => removeNotification(notification.id)} level={notification.level}>
                        <p className="message">{notification.message}</p>
                    </NotificationContainer>
                );
            })}
        </NotificationsContainer>
    );
}

export default Notifications;