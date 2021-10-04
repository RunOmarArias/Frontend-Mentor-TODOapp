import { StyledTodoListContainer } from '../../styles';
import TodoListItem from './components/TodoListItem';

export default function TodoList() {

    return (
        <StyledTodoListContainer>
            <TodoListItem
                number={1}
            />
        </StyledTodoListContainer>
    );
}
