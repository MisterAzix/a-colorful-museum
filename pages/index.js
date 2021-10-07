import styled, { keyframes } from 'styled-components';

export default function Home() {
    return <Grid>
        <MarqueeLeftContainer><MarqueeLeft>start experience - start experience - start experience</MarqueeLeft></MarqueeLeftContainer>
        <Top />
        <Content>
            <Button>start experience</Button>
            <Info>
                Welcome to an amazing experience ! You’re gonna join a colorfull world with amazing artwork. Everything is B&W but enable filter and discover the real aspect of the art.
                <br /><br /> - <br /><br />
                Once within the website, you will be able to test some filters on yourself, simply use your webcam to upload a picture of you and then apply a filter to it !
            </Info>
        </Content>
        <Bottom><Copyright>Made by Maxence B. - Anaïs M. - Gaëtan J.</Copyright></Bottom>
        <MarqueeRightContainer><MarqueeRight>start experience - start experience - start experience</MarqueeRight></MarqueeRightContainer>
    </Grid>
}

const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-rows: 96px 1fr 96px;
    grid-template-columns: 96px 1fr 96px;
    grid-template-areas:
        "marqueeL top marqueeR"
        "marqueeL content marqueeR"
        "marqueeL bottom marqueeR";
    text-align: center;
`;

const MarqueeLeftContainer = styled.div`
    grid-area: marqueeL;
    overflow: hidden;
    border-right: 1px solid var(--text-color);
    display: flex;
    justify-content: center;
`;

const MarqueeRightContainer = styled.div`
    grid-area: marqueeR;
    overflow: hidden;
    border-left: 1px solid var(--text-color);
    display: flex;
    justify-content: center;
`;

const MarqueeLeft = styled.div`
    font-size: 3rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    white-space: nowrap;
    font-family: 'Ammonite', sans-serif;
`;

const MarqueeRight = styled.div`
    font-size: 3rem;
    writing-mode: vertical-lr;
    white-space: nowrap;
    font-family: 'Ammonite', sans-serif;
`;

const Top = styled.div`
    grid-area: top;
    border-bottom: 1px solid var(--text-color);
`;

const Bottom = styled.div`
    grid-area: bottom;
    border-top: 1px solid var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.p`
    grid-area: content;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    grid-area: btn;
    border: 1px solid var(--text-color);
    background: none;
    outline: none;
    cursor: pointer;
    color: var(--text-color);
    padding: 24px 48px;
    margin: 64px 32px 32px;
    font-size: 3rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: var(--text-color);
        color: var(--background-color);
    }
`;

const Info = styled.p`
    grid-area: info;
    font-size: 1.1rem;
    max-width: 800px;
    margin: 32px;
`;

const Copyright = styled.div`
    grid-area: copyright;
    font-size: 1.1rem;
`;