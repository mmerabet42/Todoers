import styled from 'styled-components';

export const ProjectContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    background-color: white;
    border-radius: 10px;

    margin-bottom: 20px;

    .project-div {
        cursor: pointer;
        align-self: center;
        display: flex;
        flex-direction: row;

        padding: 0px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-right: 40px;
        margin: 0px;

        background-color: #539BDF;
        color: white;


        border-radius: 20px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;

        box-shadow: 0px 5px 10px #539BDF55;

        font-size: 20px;
        font-weight: bold;

        transition: all 0.1s linear;

        :hover {
            transform: translateY(-3px);
        }

        :active {
            transform: translateY(-10px);
        }
    }

    .back-arrow, .project-title {
        padding: 0px;
        margin: 0px;
    }

    .back-arrow {
        margin-right: 10px;
    }
`;

export const TodosContainer = styled.div`
    flex: 1 1 auto;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
    top: 0px;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 10px;
    }

    .project-title {
        text-align: center;
        background-color: black;
    }
`;

export const NoTodos = styled.div`
    display: flex;
    justify-content: center;

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;