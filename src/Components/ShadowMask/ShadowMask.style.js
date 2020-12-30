import styled from 'styled-components';

export const OutsideBlock = styled.div`
    display: flex;

    .top-everything {
        background-color: ${props => props.color ? props.color : "transparent"};

        z-index: 1000;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }

    .other-top {
        z-index: 1001;
        position: ${props => props.absolute === true ? "absolute" : "relative"};
        top: 0px;
        left: 0px;
        
        display: flex;
    }
`;