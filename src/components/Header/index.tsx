import { useState } from 'react';
import { Container, GithubLogo, SearchForm } from './styles';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';


interface Props {
    themeName: ThemeName;
    setThemeName: (themeName: ThemeName) => void;
}
const Header: React.FC<Props> = ({themeName, setThemeName}) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate('/' + search.toLowerCase().trim());
    }
    
    function toggleTheme() {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }
    
    return (
        <Container>
            <GithubLogo onClick={toggleTheme}/>
            <SearchForm onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter Username or Repo..." 
                value={search} 
                onChange={event => setSearch(event.target.value)}/>
            </SearchForm>
        </Container>
    );
}

export default Header;