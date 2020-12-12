import React from 'react';
import { GroupNamesContext } from '../../../Contexts/GroupNamesContext';
import { TodosContext } from '../../../Contexts/TodoContext';

import {
    ListContainer,
    StyledButton,
    TodosContainer,
    TodoContainer
} from './ConnectedTodos.style';

const ConnectedTodos = ({group}) => {
    const [ expandTodos, setExpandTodos ] = React.useState(false);

    const { todoList, setTodoList } = React.useContext(TodosContext);

    const connectedTodos = [];
    todoList.forEach((value, id) =>
        value.connectedGroup === group.id && connectedTodos.push(id));

    return (
        <ListContainer>
            <p onClick={() => setExpandTodos(!expandTodos)} className="title">
                Connected todos ({connectedTodos.length}) <span>{expandTodos ? "⮝" : "⮟"}</span>
            </p>
            { expandTodos && <TodoList todos={todoList} todoIds={connectedTodos} setTodoList={setTodoList} /> }
        </ListContainer>
    )
}

const TodoList = ({todos, todoIds, setTodoList}) => {
    const [ selectedList, setSelectedList ] = React.useState([]);
    const { getGroupById } = React.useContext(GroupNamesContext);

    const handleCheck = (id, checked) => {
        if (checked)
            setSelectedList(prev => prev.filter(value => value !== id));
        else
            setSelectedList(prev => [...prev, id]);
    }

    const selectAll = () => {
        setSelectedList([...todoIds]);
    }

    const performUnlink = async () => {
        await setTodoList(prev => {
            const copyPrev = [...prev];
            selectedList.forEach(value => copyPrev[value].connectedGroup = null);    ;
            return copyPrev;
        })
        setSelectedList([]);
    }

    return (
        <TodosContainer>
            <div className="buttonsContainer">
                <StyledButton onClick={performUnlink} color="#539BDF">Unlink selected todos ({selectedList.length})</StyledButton>
                <button onClick={selectAll} className="selectAll">Select all</button>
            </div>
            { todoIds.map((todoId, id) => {
                const checked = selectedList.find(value => value === todoId) !== undefined ? true : false;

                return (
                    <TodoContainer key={id} checked={checked} onClick={() => handleCheck(todoId, checked)}>
                        <div className="nameContainer">
                            <p className="detail">{todos[todoId].details}</p>
                            <p className="fromGroup">{getGroupById(todos[todoId].group).name} - {todos[todoId].creationDate}</p>
                        </div>
                        <p className="checkbox">✓</p>
                    </TodoContainer>
                )
            })}
        </TodosContainer>
    )
}

export default ConnectedTodos;