import { StyledTodoAdd, StyledTodoIcon, StyledTodoInput } from '../../styles';
import CircleIconDark from '../../../../../../assets/icons/CircleIconDark.svg';
//TODO Give functionality, set a state.
export default function TodoAdd() {
    const addATodo = () => {
        console.log('Click to add a todo.');
    };

    return (
        <StyledTodoAdd>
            <StyledTodoIcon
                type='image'
                src={CircleIconDark}
                alt='Unselected'
                onClick={addATodo}
            />
            <StyledTodoInput />
        </StyledTodoAdd>
    );
}
