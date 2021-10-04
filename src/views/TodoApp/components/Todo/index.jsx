import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import TodoMenu from './components/TodoMenu/TodoMenu';
//import db from '../../../../config/firebaseConfig';
import { StyledTodo } from './styles';
//import { useEffect } from 'react';
//import { collection, getDocs } from 'firebase/firestore';

export default function Todo() {
    /* useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'todos'));
            data.forEach((doc) => {
                console.log(doc.data());
            });
        };
        getData();
    }, []); */

    return (
        <StyledTodo>
            <TodoAdd />
            <TodoList />
            <TodoMenu />
        </StyledTodo>
    );
}
