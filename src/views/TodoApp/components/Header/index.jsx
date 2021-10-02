import { StyledHeader, StyledHeaderTitle } from './styles';
import HeaderButton from './components/HeaderButton';

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderTitle>TODO</StyledHeaderTitle>
            <HeaderButton />
        </StyledHeader>
    );
}
