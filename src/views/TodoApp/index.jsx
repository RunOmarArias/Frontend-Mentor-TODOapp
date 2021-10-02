import { StyledTodoApp } from './styles';
import Footer from './components/Footer';
import Header from './components/Header';
import Todo from './components/Todo';

export default function TodoApp() {
    return (
        <StyledTodoApp>
            <Header />
            <Todo />
            <Footer />
        </StyledTodoApp>
    );
}
