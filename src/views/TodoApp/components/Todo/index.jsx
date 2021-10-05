import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import TodoMenu from './components/TodoMenu/TodoMenu';
import { StyledTodo } from './styles';

export default function Todo() {

    return (
        <StyledTodo>
            <TodoAdd />
            <TodoList />
            <TodoMenu />
        </StyledTodo>
    );
}
