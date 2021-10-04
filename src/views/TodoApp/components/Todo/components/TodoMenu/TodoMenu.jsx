import {
    StyledTodoMenuContainer,
    StyledTodoMenuCounter,
    StyledTodoMenuButtons,
    StyledTodoMenuButton,
} from '../../styles';

export default function TodoMenu() {
    return (
        <StyledTodoMenuContainer>
            <StyledTodoMenuCounter>*number* items left</StyledTodoMenuCounter>
            <StyledTodoMenuButtons>
                <StyledTodoMenuButton>All</StyledTodoMenuButton>
                <StyledTodoMenuButton>Active</StyledTodoMenuButton>
                <StyledTodoMenuButton>Completed</StyledTodoMenuButton>
            </StyledTodoMenuButtons>
            <StyledTodoMenuButton>Clear completed</StyledTodoMenuButton>
        </StyledTodoMenuContainer>
    );
}
