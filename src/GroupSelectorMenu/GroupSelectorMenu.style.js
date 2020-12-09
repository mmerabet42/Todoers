import styled from 'styled-components';

export const Relativer = styled.div`
    position: relative;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;

    width: 300px;
    position: absolute;
    top: 40px;
    right: 10px; 
    padding: 10px;

    background-color: #539BDF;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    color: white;

    .title {
        flex: 0 1 auto;
    }

    .content {
        flex: 1 1 auto;
        overflow-y: scroll;

        max-height: 400px;
    }

    .content::-webkit-scrollbar {
        width: 5px;
    }
    .content::-webkit-scrollbar-thumb {
        background-color: white;
    }

    .addInput {
        flex: 0 1 auto;
    }
`;

export const GroupName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
        
    font-size: 20px;
    /* padding: 10px; */
    margin: 2px;
    border-radius: 10px;

    transition: all 0.1s linear;

    background-color: ${props => props.isSelected ? "#35BECE" : "transparent"};

    :hover {
        background-color: ${props => props.isSelected ? "#35BECE" : "rgba(0, 0, 0, 0.2)"};
        transform: scale(0.98);
    }

    :hover .moveButton {
        background-color: white;
        color: black;
    }

    p {
        flex: 1 1 auto;
        word-break: break-all;
        margin: 0px;
        padding: 10px;
        cursor: pointer;
    }
`;

export const ButtonContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
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

export const MoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    outline: none;
    border: none;
    /* border: 3px #FF5A5F solid; */
    border-radius: 5px;

    padding: 10px;
    width: 1vw;
    height: 1vw;

    margin-left: 5px;
    /* background-color: #FF5A5F; */
    background-color: transparent;
    color: transparent;
    font-size: 20px;
    
    transition: all 0.1s linear;
    
    :hover {
        background-color: transparent !important;
        color: white !important;
    }

    :active {
        background-color: white !important;
        color: black !important;
    }
`;