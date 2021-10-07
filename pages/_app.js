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

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #212121;
        color: #FFFFFF;
        font-family: 'Code New Roman', sans-serif;
        overflow-x: hidden;
    }
    
    h1, h2, h3, button {
        font-family: 'Ammonite', sans-serif;
    }
`;