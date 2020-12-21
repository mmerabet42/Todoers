import styled from 'styled-components';

export const Center = styled.div`
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;
    margin: auto;

    .add-project {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #35BECE;
        border: 5px #35BECE solid;

        margin-bottom: 20px;
        border-radius: 10px;

        color: white;   
        font-size: 30px;
        font-weight: bold;
        padding: 10px;

        transition: all 0.1s linear;

        :hover {
            transform: scale(0.98);
        }

        :active {
            transform: scale(0.95);
        }
    }
`;

export const ProjectsContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    
    position: relative;
    top: 0px;
    overflow: hidden;
    overflow-y: scroll;

    margin: 0px;
    padding: 0px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const Project = styled.div`
    display: flex;
    flex-direction: row;

    background-color: white;
    border-radius: 20px;
    margin-bottom: 20px;

    font-size: 20px;

    transition: all 0.2s linear;

    .select-rect {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .delete-rect {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .select-rect, .delete-rect {
        cursor: pointer;
        flex: 0 1 auto;
        background-color: white;
        height: 100%;

        transition: all 0.2s linear;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    :hover .select-rect {
        background-color: #35BECE;
    }

    .icon {
        color: white;
        font-size: 30px;
        padding: 20px;
    }

    :hover .delete-rect {
        background-color: #FF5A5F;
    }

    .title-container {
        flex: 1 1 auto;
        cursor: pointer;
        padding: 10px;
        padding-left: 0px;

        margin-left: 20px;
        margin-right: 20px;

        transition: all 0.1s linear;
    }

    .creation-date {
        color: #b1b1b1;
    }

    :hover {
        transform: scale(0.98);
    }

    :active {
        transform: scale(0.95);
    }
`;