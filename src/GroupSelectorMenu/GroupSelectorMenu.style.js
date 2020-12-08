import styled from 'styled-components';

export const Relativer = styled.div`
    position: relative;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    width: 300px;
    position: absolute;
    top: 40px;
    right: 10px; 
    padding: 10px;

    background-color: #539BDF;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    color: white;

    .groupNameContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        font-size: 20px;
        width: 100%;

        p {
            padding: 10px;
            margin: 2px;
            border-radius: 10px;
            width: 100%;
            display:flex;
            justify-content: space-between;
            
            transition: all 0.1s linear;
        }
    }

    .selectedGroup, .groupName {
        word-break: break-all;
    }

    .selectedGroup {
        background-color: #35BECE;
    }

    .groupName:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;


export const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    outline: none;
    border: 3px #FF5A5F solid;
    border-radius: 5px;

    padding: 10px;
    width: 1vw;
    height: 1vw;

    margin-left: 5px;
    background-color: #FF5A5F;
    color: white;
    font-size: 20px;
    
    transition: all 0.1s linear;
    
    :hover {
        background-color: white;
        color: #FF5A5F;
    }

    :active {
        background-color: #FF5A5F;
        color: white;
    }
`;