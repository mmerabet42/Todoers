import styled from 'styled-components';

export const TodosContainer = styled.div`
    flex: 1 1 auto;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 20px;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 10px;
    }
`;

export const NoTodos = styled.div`
    display: flex;
    justify-content: center;

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;