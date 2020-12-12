import styled from 'styled-components';

export const ListContainer = styled.div`
    .title {
        cursor: pointer;
        font-weight: bold;
        
        transition: all 0.1s linear;
    }

    .title span {
        font-size: 10px;
    }

    .title:hover {
        transform: scale(0.99);
    }

    .title:active {
        transform: scale(0.95);
    }
`;


export const MenuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    flex: 1 1 auto;
    overflow: hidden;
`;

export const StyledButton = styled.button`
    flex: 0 1 auto;
    outline: none;
    cursor: pointer;
    margin: ${props => props.margin};
    padding: 10px;

    border: 3px ${props => props.color} solid;
    border-radius: 10px;

    font-family: inherit;
    font-weight: bold;
    font-size: 20px;

    background-color: ${props => props.color};
    color: white;

    transition: all 0.1s linear;

    :hover {
        background-color: transparent;
        color: ${props => props.color};
    }

    :active {
        background-color: ${props => props.color};
        color: white;
    }
`;

export const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    .buttonsContainer {
        display: flex;
        flex-direction: column;
        /* justify-content: flex-end; */
    }

    .selectAll {
        cursor: pointer;
        align-self: flex-end;
        background-color: transparent;
        outline: none;
        border: none;
        color: #539BDF;
        
        font-family: inherit;
        font-weight: bold;
        padding: 5px;
    }
`

export const TodoContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin-left: 10px; */

    transition: all 0.1s linear;

    :hover {
        transform: scale(0.99);
    }

    :active {
        transform: scale(0.95);
    }

    .nameContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px;
    
        font-size: 15px;

        p {
            margin: 2px;
        }
    }

    .checkbox {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px #b1b1b1 solid;
        border-radius: 10px;
        padding: 5px;

        width: 1vw;
        height: 1vw;

        background-color: ${props => props.checked ? "#b1b1b1" : "transparent"};
        color: white;
    }

    .fromGroup {
        color: #b1b1b1;
    }
`;