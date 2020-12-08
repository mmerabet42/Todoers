import styled from 'styled-components';

export const InputContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
    margin: 5px;

    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; */
`;

export const NameInput = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;

    font-family: inherit;
    font-size: 20px;
`;

export const NewGroupButton = styled.button`
    cursor: pointer;
    outline: none;
    border: 3px #539BDF solid;
    background-color: #539BDF;
    color: white;
    border-radius: 10px;

    font-family: inherit;
    font-weight: bold;
    font-size: 20px;
    
    transition: all 0.1s linear;

    :hover {
        background-color: transparent;
        color: #539BDF;
    }

    :active {
        background-color: #539BDF;
        color: white;
    }
`;