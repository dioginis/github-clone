import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: var(--primary);
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, Apple Color;
        color: var(--black);

        transition: color .2s ease-out;
    }
    ul {
        list-style: none;
    }
    :root {
        ${props => {
            const theme = props.theme;

            let append = '';

            Object.entries(theme).map(([key, value]) => {
                append += `--${key}: ${value};`;
            })

            return append;
        }}
    }
`;