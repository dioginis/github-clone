import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading,  RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIRepo, APIUser } from '../../@types';

interface Data {
    user?: APIUser;
    repos?: APIRepo[];
    error?: string;
}
const Profile: React.FC = () => {
    const { username = 'dioginis' } = useParams();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`)
        ]).then(async (responses) => {
            const [userResponse, reposReponse] = responses;

            if(userResponse.status === 404) {
                setData({ error: 'User not found!' });
                return;
            }

            const user = await userResponse.json();
            const repos = await reposReponse.json();

            const slicedRepos = repos.slice(0, 4);

            setData({ user, repos: slicedRepos });
        })
    }, [username]);

    if (data?.error){
        return <h1>{data.error}</h1>
    }

    if (!data?.user || !data?.repos) {
        return <h1>Loading...</h1>
    }

    const TabContent = () => {
        return (
            <>
                <div className="content">
                    <RepoIcon />
                    <span className="label">Repositories</span>
                    <span className="number">{data.user?.public_repos}</span>
                </div>
            </>
        )
    }


    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset"></span>
                    <TabContent />
                </div>
                <span className="line"></span>
            </Tab>

            <Main>
                <LeftSide>
                    <ProfileData 
                        username={data.user.login}
                        name={data.user.name}
                        avatarUrl={data.user.avatar_url}
                        followers={data.user.followers}
                        following={data.user.following}
                        company={data.user.company}
                        location={data.user.location}
                        email={data.user.email}
                        blog={data.user.blog}
                        />
                </LeftSide>
                <Tab className="mobile">
                    <TabContent />
                    <span className="line"></span>
                </Tab>

                <RightSide>
                    <Repos>
                        <h1>Random Repos</h1>
                        <div>
                            {data.repos?.map(repo => (
                                <RepoCard 
                                key={repo.name} 
                                username={repo.owner.login}
                                reponame={repo.name}
                                description={repo.description}
                                language={repo.language} 
                                stars={repo.stargazers_count}
                                forks={repo.forks}
                                />
                            ))}
                        </div>
                    </Repos>
                    <CalendarHeading>
                        Random Calendar (do not represent actual data)
                    </CalendarHeading>
                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;