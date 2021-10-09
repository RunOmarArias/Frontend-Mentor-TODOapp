import { StyledTodoListContainer } from '../../styles';
import TodoListItem from './components/TodoListItem';
import db from '../../../../../../config/firebaseConfig';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function TodoList({ flagChangeList }) {

    const [todoData, setTodoData] = useState([]);
    const [deletedTodoFlag, setDeletedTodoFlag] = useState(false);
    const todosCollection = collection(db, 'todos');

    const getData = async () => {
        const data = await getDocs(todosCollection);
        setTodoData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getData();
    }, [flagChangeList, deletedTodoFlag]);

    const HandleDeleteTodo = (value) => {
        if(value && !deletedTodoFlag) {
            setDeletedTodoFlag(true);
        } else {
            setDeletedTodoFlag(!deletedTodoFlag);
        }
    }

    return (
        <StyledTodoListContainer>
            {
                todoData.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo.todo} id={todo.id} onDelete={HandleDeleteTodo} />
                ))
            }
        </StyledTodoListContainer>
    );
}
