import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    /* overflow: hidden; */
    background-color: white;
    border-radius: 10px;
    justify-content: space-between;
    align-items: stretch;
`;

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    padding: 15px;
    outline: none;
    border-radius: 10px;


    font-size: 20px;
    font-family: inherit;

    color: #666666;

    ::placeholder {
        color: #d8d8d8;
    }
`;

export const StyledButton = styled.button`
    /* background-color: #0D1F2D; */
    outline: none;
    border: 3px #539BDF solid;
    border-radius: 10px;
    margin: 5px;
    
    font-family: inherit;
    font-weight: bold;
    font-size: 20px;
    
    padding-left: 10px;
    padding-right: 10px;
    transition: all 0.1s linear;
    
    background-color: #539BDF;
    color: white;
    
    :hover {
        background-color: transparent;
        color: #539BDF;
    }

    :active {
        background-color: #539BDF;
        color: white;
    }
`;

export const ChangeGroupButton = styled.button`
    background-color: #0D1F2D;
    color: white;
    border-radius: 10px;
    border: 3px #0D1F2D solid;
    outline: none;

    font-family: inherit;
    font-weight: bold;

    margin: 5px;

    transition: all 0.1s linear;

    :hover {
        background-color: transparent;
        color: #0D1F2D;
    }

    :active {
        background-color: #0D1F2D;
        color: white;
    }
`;