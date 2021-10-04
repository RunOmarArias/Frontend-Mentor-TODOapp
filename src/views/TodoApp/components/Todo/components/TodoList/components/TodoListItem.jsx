import {
    StyledTodoListItem,
    StyledTodoListCheck,
    StyledTodoListIcon,
    StyledTodoListIconCross,
    StyledTodoButton
} from '../../../styles';
import iconCross from '../../../../../../../assets/icons/icon-cross.svg';
import iconCircleBlueFilled from '../../../../../../../assets/icons/CircleIconBlueFilled.svg';
import iconCircleBlueDarkFilled from '../../../../../../../assets/icons/CircleIconBlueDarkFilled.svg';
import { useState } from 'react';

export default function TodoListItem({ number }) {
    const [iconFlag, setIconFlag] = useState(true);

    const handleIconFlag = () => {
        setIconFlag(!iconFlag);
    };

    return (
        <StyledTodoListItem>
            <StyledTodoListCheck>
                {iconFlag ? (
                    <StyledTodoListIcon
                        onMouseOver={handleIconFlag}
                        onMouseOut={handleIconFlag}
                        type='image'
                        alt='No hover'
                        src={iconCircleBlueFilled}
                    />
                ) : (
                    <StyledTodoListIcon
                        onMouseOver={handleIconFlag}
                        onMouseOut={handleIconFlag}
                        type='image'
                        alt='Hover'
                        src={iconCircleBlueDarkFilled}
                    />
                )}
                <StyledTodoButton>Todo {number}</StyledTodoButton>
            </StyledTodoListCheck>
            <StyledTodoListIconCross type='image' src={iconCross} alt='cross' />
        </StyledTodoListItem>
    );
}
