import styled from 'styled-components';

export const InputContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    /* overflow: hidden; */
    background-color: white;
    border-radius: 10px;
    justify-content: space-between;
    align-items: stretch;

    margin-bottom: 20px;
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
    cursor: pointer;
    outline: none;
    border: 3px #539BDF solid;
    border-right: none;
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: 5px;
    margin-right: 0px;
    
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
    cursor: pointer;
    outline: none;
    border: 3px #539BDF solid;
    border-left: none;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 5px;
    margin-left: 0px;
    
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