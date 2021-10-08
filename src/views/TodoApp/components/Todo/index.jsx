import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import TodoMenu from './components/TodoMenu/TodoMenu';
import { StyledTodo } from './styles';
import { useState } from 'react';

export default function Todo() {

    const [flagTodoChange, setFlagTodoChange] = useState('');

    const handleAddTodoChange = (flagChange) => {
        setFlagTodoChange(flagChange);
    }

    return (
        <StyledTodo>
            <TodoAdd onChange={handleAddTodoChange} />
            <TodoList flagChangeList={flagTodoChange} />
            <TodoMenu />
        </StyledTodo>
    );
}
