import { StyledTodoListContainer } from '../../styles';
import TodoListItem from './components/TodoListItem';
import db from '../../../../../../config/firebaseConfig';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function TodoList() {

    const [todoData, setTodoData] = useState([]);
    const todosCollection = collection(db, 'todos');

    const getData = async () => {
        const data = await getDocs(todosCollection);
        setTodoData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <StyledTodoListContainer>
            {
                todoData.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo.todo} />
                ))
            }
        </StyledTodoListContainer>
    );
}
