import { StyledTodoAdd, StyledTodoIcon, StyledTodoInput } from '../../styles';
import CircleIconDark from '../../../../../../assets/icons/CircleIconDark.svg';
import db from '../../../../../../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function TodoAdd({ onChange }) {

    const [newTodo, setNewTodo] = useState('');
    const [todoFlagChange, setTodoFlagChange] = useState(false);
    const todosCollection = collection(db, 'todos');

    const addATodo = (event) => {
        event.preventDefault();
        createTodo();
        setTodoFlagChange(!todoFlagChange);
        console.log(`Adding todo "${newTodo}"`);
        setNewTodo('');
    };

    useEffect(() => {
        onChange(todoFlagChange);
    }, [todoFlagChange]);

    const createTodo = async () => {
        await addDoc(todosCollection, { todo: newTodo });
    }

    const handleNewTodoChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <StyledTodoAdd>
            <StyledTodoIcon
                type='image'
                src={CircleIconDark}
                alt='Unselected'
                onClick={addATodo}
            />
            <StyledTodoInput value={newTodo} onChange={handleNewTodoChange} />
        </StyledTodoAdd>
    );
}
