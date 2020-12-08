import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-flow: column;

    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 350px;
    border-radius: 10px;

    margin: 30px;
    margin-left: 50px;

    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    background-color: white;
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;

    padding: 10px;

    .names {
        display: flex;
        margin: 10px;
        overflow: hidden;
    }

    .groupName {
        text-decoration: underline;
    }

    .details {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .groupName, .details {
        font-size: 20px;
        font-weight: bold;
    }

    .closeButton {
        outline: none;
        border: none;
        cursor: pointer;

        color: black;
        background-color: transparent;

        font-size: 30px;

        transition: all 0.1s linear;

        :hover {
            transform: scale(0.9);
        }

        :active {
            transform: scale(1.1);
        }
    }
`;

export const MenuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    flex: 1 1 auto;
    overflow: hidden;

    .saveButton {
        outline: none;
        margin: 20px;
        padding: 10px;
        border: 3px #539BDF solid;
        border-radius: 10px;

        font-family: inherit;
        font-weight: bold;
        font-size: 20px;

        background-color: #539BDF;
        color: white;

        transition: all 0.1s linear;
    }

    .saveButton:hover {
        background-color: transparent;
        color: #539BDF;
    }

    .saveButton:active {
        flex: 0 1 auto;
        background-color: #539BDF;
        color: white;
    }
`;

export const TodoSettings = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 20px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .setting {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .setting select {
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 100%;

        font-family: inherit;
        font-size: 20px;


        color: white;
        background-color: #539BDF;
    }

    .linkGroup {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
    }

    .setting-name {
        font-size: 20px;
        margin: 0px;
        margin-bottom: 5px;
    }

    .setting-input {
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 10px;
        resize: none;
        

        background-color: #539BDF;
        color: white;

        font-size: 20px;
        font-family: inherit;
    }
`;

export const LinkCheckbox = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    border: 3px #539BDF solid;
    border-radius: 10px;
    font-size: 20px;
    color: ${props => props.checked ? "white" : "#539BDF"};
    background-color: ${props => props.checked ? "#539BDF" : "transparent"};

    width: 2.5vw;
    height: 2.5vw;

    p {
        transition: all 0.1s linear;
    }

    :hover p {
        transform: scale(1.2);
    }
    
    :active {
        color: ${props => !props.checked ? "white" : "#539BDF"};
        background-color: ${props => !props.checked ? "#539BDF" : "transparent"};;
    }
`;