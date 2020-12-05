import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    overflow: hidden;
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
    border: 5px #539BDF solid;
    border-radius: 5px;
    margin: 5px;
    overflow: hidden;
    
    font-size: 20px;
    
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.1s linear;
    
    background-color: #539BDF;
    color: white;
    
    :active {
        background-color: transparent;
        color: #539BDF;
    }
`;