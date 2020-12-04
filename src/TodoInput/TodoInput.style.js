import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    overflow: hidden;

    margin: auto;
    width: 50%;
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
    background-color: #0D1F2D;
    outline: none;
    border: none;
    
    color: white;
    font-size: 40px;

    padding-left: 10px;
    padding-right: 10px;

    div {
        transition: all 0.2s linear;
    }
    
    :hover div {
        text-shadow: -2px 1px 5px gray;
        transform: translate(5px);
    }
`;