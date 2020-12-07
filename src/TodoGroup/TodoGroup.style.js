import styled from 'styled-components';

export const GroupTitle = styled.p`
    font-size: 20px;
    margin: 0px;
    max-width: 50%;
    font-weight: bold;

    text-decoration: ${props => props.isCurrent ? "underline" : "none"};
`;

export const Percentage = styled.p`
    font-size: 15px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    margin-bottom: 10px;
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