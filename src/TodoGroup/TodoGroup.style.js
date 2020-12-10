import styled from 'styled-components';

export const GroupTitle = styled.p`
    font-size: 20px;
    margin: 0px;
    font-weight: bold;
    word-break: break-all;

    text-decoration: ${props => props.isCurrent ? "underline" : "none"};
`;

export const TitleContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    margin-bottom: 10px;

    transition: all 0.1s linear;

    :hover {
        transform: scale(0.99);
    }

    :active {
        transform: scale(0.98);
    }

    .nameContainer {
        flex: 0 1 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .percentage {
        font-size: 15px;
    }

    .showTodosToggle {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .arrowhead {
        font-size: 10px;
        margin: 0px;
        margin-left: 10px;
        padding: 0px;
        transform: ${props => props.show ? "rotateZ(0deg)" : "rotateZ(180deg)"};
    }
`;