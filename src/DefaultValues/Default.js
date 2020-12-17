import { v4 as uuidv4 } from 'uuid';
import { getDate } from '../Utils/getDate';

const exampleProjectId = uuidv4();

const exampleGroup = {
    name: "Example",
    id: uuidv4(),
    description: "An example group.",
    projectId: exampleProjectId
};

const exampleProject = {
    name: "Project Example",
    id: exampleProjectId,
    description: "Project's description.",
    current: exampleGroup.id,
}

export const projectContext = {
    current: null,
    list: [exampleProject]
};

export const groupContext = {
    current: exampleGroup.id,
    list: [exampleGroup]
};

export const todoContext = [{
    group: exampleGroup.id,
    connectedGroup: null,
    id: uuidv4(),
    details: "Todo Example",
    description: "An example todo",
    done: false,
    creationDate: getDate(),
    projectId: exampleProject.id
}];