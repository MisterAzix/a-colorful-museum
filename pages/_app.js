import { createGlobalStyle } from 'styled-components'

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
    
    h1, h2, h3, button {
        font-family: 'Ammonite', sans-serif;
    }
`;