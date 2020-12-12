import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 10px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;

    transition: all 0.1s linear;

    :hover {
        transform: scale(0.99);
    }

    :active {
        transform: scale(0.98);
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    cursor: pointer;

    .details {
        margin-bottom: 0px;
        word-break: break-all;
    }

    .creationDate {
        color: #b1b1b1;
        font-size: 15px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
`;

export const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 15px;
        /* margin: 10px; */
        padding: 10px;
        color: white;
        background-color: #35BECE;
        border-radius: 10px;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    outline: none;
    border: 3px #FF5A5F solid;
    border-radius: 10px;

    padding: 20px;
    width: 2vw;
    height: 2vw;

    margin-left: 5px;
    background-color: #FF5A5F;
    color: white;
    font-size: 20px;
    
    transition: all 0.1s linear;
    
    :hover {
        background-color: transparent;
        color: #FF5A5F;
    }

    :active {
        background-color: #FF5A5F;
        color: white;
    }
`;


export const DoneCheckbox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    outline: none;
    border: 3px #35BECE solid;
    border-radius: 10px;

    padding: 20px;
    width: 2vw;
    height: 2vw;

    margin-left: 5px;

    background-color: ${props => props.done ? "#35BECE" : "transparent"};
    font-size: 20px;
    color: ${props => props.done ? "white" : "#35BECE"};

    transition: all 0.1s linear;

    :hover {
        font-size: 30px;
    }

    :active {
        background-color: ${props => !props.done ? "#35BECE" : "transparent"};
        color: ${props => !props.done ? "white" : "#35BECE"};
    }
`;