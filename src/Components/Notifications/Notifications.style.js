import styled from 'styled-components';

const colorLevels = {
    "error": {
        bg: "#FF5A5F",
        fg: "white"
    },
    "valid": {
        bg: "#35BECE",
        fg: "white"
    },
    "neutral": {
        bg: "white",
        fg: "black"
    }
};

export const NotificationsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    
    position: fixed;
    left: 50px;
    bottom: 50px;

    z-index: 1002;
`;

export const NotificationContainer = styled.div`
    cursor: pointer;
    border-radius: 10px; 
    margin: 5px;
    width: 300px;

    background-color: ${props => colorLevels[props.level].bg};
    color: ${props => colorLevels[props.level].fg};

    transition: all 0.1s linear;

    .message {
        margin: 10px;
    }

    :hover {
        transform: scale(1.1);
    }

    :active {
        transform: scale(0.9);
    }
`;