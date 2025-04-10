import { Container, Breadcrumb, RepoIcon, StarIcon, ForkIcon, GithubIcon, LinkButton, Stats } from './styles';
import { Link } from 'react-router-dom';


const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={"username"} to={"/dioginis"}>dioginis</Link>
                <span>/</span>
                <Link className={"reponame"} to={"/dioginis/github-clone"}>github-clone</Link>
            </Breadcrumb>

            <p>Contains all of my github clone project code.</p>

            <Stats>
                <li>
                    <StarIcon />
                    <b>10</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>15</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href="https://github.com/dioginis/github-clone">
                <GithubIcon />
                <span>View on GitHub</span>
            </LinkButton>

        </Container>
    );
}

export default Repo;