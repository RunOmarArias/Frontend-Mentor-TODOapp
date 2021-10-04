import styled from 'styled-components';

//index

export const StyledTodo = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//TodoAdd

export const StyledTodoAdd = styled.div`
    display: flex;
    flex-direction: row;
    background-color: hsl(235, 24%, 19%);
    align-items: center;
    height: 2.8em;
    width: 35%;
    border-radius: 0.2em;
    box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
`;

export const StyledTodoIcon = styled.input`
    width: 1.5em;
    height: 1.5em;
    margin-left: 1em;
    margin-right: 1em;
`;

export const StyledTodoInput = styled.input`
    width: 80%;
    outline: none;
    border-radius: 0.2em;
    border: none;
    background-color: hsl(235, 24%, 19%);
    color: #d8d8d8;
    caret-color: #4d42ff;
    font-family: 'Josefin Sans';
`;

//TodoList

export const StyledTodoListContainer = styled.div`
    color: darkgray;
    width: 35%;
    margin-top: 1.5em;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    border-radius: 0.2em;
    background-color: hsl(235, 24%, 19%);
`;

export const StyledTodoListItem = styled.div`
    width: 100%;
    padding: 1em 0 1em 0;
    display: flex;
    flex-direction: row;
    :hover {
        cursor: pointer;
    }
`;

export const StyledTodoListCheck = styled.span`
    width: 10em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 95%;
    justify-content: flex-start;
`;

export const StyledTodoListIcon = styled.input`
    width: 1.5em;
    height: 1.5em;
    margin: 0 1em;
`;

export const StyledTodoListIconCross = styled.input`
    width: 1em;
    height: 1em;
    margin-right: 1.2em;
`;

export const StyledTodoButton = styled.button`
    width: 92%;
    display: flex;
    cursor: pointer;
    border: none;
    align-items: center;
    background: hsl(235, 24%, 19%);
    color: darkgray;
    font-family: 'Josefin Sans';
`;

//TodoMenu

export const StyledTodoMenuContainer = styled.div`
    background-color: hsl(235, 24%, 19%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    height: 0.5em;
    padding: 1em 0;
    font-size: 0.8em;
    box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.59);
    border-radius: 0.2em;
`;

export const StyledTodoMenuCounter = styled.label`
    color: darkgray;
    margin-left: 1em;
    font-size: 0.9em;
`;

export const StyledTodoMenuButtons = styled.section``;

export const StyledTodoMenuButton = styled.button`
    margin: 0 1em;
    background-color: hsl(235, 24%, 19%);
    color: darkgray;
    font-family: 'Josefin Sans';
    border: none;
    cursor: pointer;
    font-size: 0.9em;
`;
