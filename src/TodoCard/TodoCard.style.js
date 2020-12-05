import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 10px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;
`;

export const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

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
    
    :active {
        background-color: transparent;
        color: #FF5A5F;
    }
`;


export const DoneCheckbox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

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

    :active {
        background-color: ${props => !props.done ? "#35BECE" : "transparent"};
        color: ${props => !props.done ? "white" : "#35BECE"};
    }
`;