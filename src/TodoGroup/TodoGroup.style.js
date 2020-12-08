import styled from 'styled-components';

export const GroupTitle = styled.p`
    font-size: 20px;
    margin: 0px;
    font-weight: bold;
    word-break: break-all;

    text-decoration: ${props => props.isCurrent ? "underline" : "none"};
`;

export const Percentage = styled.p`
    font-size: 15px;
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
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .arrowhead {
        font-size: 10px;
        margin: 0px;
        margin-left: 10px;
        padding: 0px;
        transform: ${props => props.show ? "rotateZ(0deg)" : "rotateZ(180deg)"};
    }
`;

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #539BDF;
`;

export const ExpandArrow = styled.p`
    font-size: 20px;
    margin: 0px;

    border: 1px black solid;
    background-color: transparent;

    width: 1vw;
    height: 1vw;
    border-radius: 1vw;
`;