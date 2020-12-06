import styled from 'styled-components';

export const Relativer = styled.div`
    position: relative;
`;

export const MenuContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 20px;
    padding: 10px;

    background-color: white;
    border-radius: 10px;

    .groupNameContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        
        font-size: 20px;

        p {
            padding: 10px;
            margin: 2px;
            border-radius: 10px;
            width: 100%;
            
            transition: all 0.1s linear;
        }
    }

    .selectedGroup {
        background-color: #35BECE;
    }

    .groupName:hover {
        background-color: #DADADA;
    }
`;