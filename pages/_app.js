import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #212121;
        --text-color: #FFFFFF;
    }

    html {
        font-size: 16px;

        @media screen and (max-width: 480px) {
            font-size: 14px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            background-color: var(--background-color);
            width: 1vmin;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--text-color);
        }
    }

    body {
        background-color: #212121;
        color: #FFFFFF;
        font-family: 'Code New Roman', sans-serif;
        overflow-x: hidden;
    }
    
    h1, h2, button {
        font-family: 'Ammonite', sans-serif;
    }

    h1 {
        font-size: 3.052rem;
    }
    
    h2 {
        font-size: 2.441rem;
    }

    h3 {
        font-size: 1.563rem;
        font-style: italic;
    }

    h4 {
        font-size: 1.563rem;
    }
`;