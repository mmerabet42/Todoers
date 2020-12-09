import { v4 as uuidv4 } from 'uuid';
import { getDate } from '../Utils/getDate';

const exampleGroup = {
    name: "Example",
    id: uuidv4()
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
    description: "",
    done: false,
    creationDate: getDate()
}];