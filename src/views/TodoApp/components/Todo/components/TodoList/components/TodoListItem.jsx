import {
    StyledTodoListItem,
    StyledTodoListCheck,
    StyledTodoListIcon,
    StyledTodoListIconCross,
    StyledTodoButton,
} from '../../../styles';
import iconCross from '../../../../../../../assets/icons/icon-cross.svg';
import iconCircleBlueFilled from '../../../../../../../assets/icons/CircleIconBlueFilled.svg';
import iconCircleBlueDarkFilled from '../../../../../../../assets/icons/CircleIconBlueDarkFilled.svg';
import db from '../../../../../../../config/firebaseConfig';
import { useState } from 'react';
import { doc, deleteDoc } from '@firebase/firestore';

export default function TodoListItem({ todo, id, onDelete }) {
    const [iconFlag, setIconFlag] = useState(true);

    const handleIconFlag = () => {
        setIconFlag(!iconFlag);
    };

    const deleteTodo = async (id) => {
        const todoDoc = doc(db, 'todos', id);
        await deleteDoc(todoDoc);
        onDelete(true);
    };

    return (
        <StyledTodoListItem>
            <StyledTodoListCheck>
                <StyledTodoListIcon
                    onMouseOver={handleIconFlag}
                    onMouseOut={handleIconFlag}
                    type='image'
                    alt={iconFlag ? 'No hover' : 'Hover'}
                    src={
                        iconFlag
                            ? iconCircleBlueFilled
                            : iconCircleBlueDarkFilled
                    }
                />
                <StyledTodoButton>{todo}</StyledTodoButton>
            </StyledTodoListCheck>
            <StyledTodoListIconCross
                type='image'
                src={iconCross}
                alt='cross'
                onClick={() => deleteTodo(id)}
            />
        </StyledTodoListItem>
    );
}
