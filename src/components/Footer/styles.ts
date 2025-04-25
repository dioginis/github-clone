import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 25px 32px;
`;

export const Line = styled.div`
   max-width: 1280px;
   width: 100%;
   border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
    margin: 32px 0;
    fill: var(--border);
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

