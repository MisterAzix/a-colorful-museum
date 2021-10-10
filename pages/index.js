import styled from 'styled-components';
import Link from 'next/link';

import Marquee from '../components/Marquee';

export default function Home() {
    return <Grid>
        <Marquee display="left" y="-404">
            start experience - start experience - start experience - start experience - start experience
        </Marquee>
        <Top />
        <Content>
            <Link href="/artwork" passHref><Button>start experience</Button></Link>
            <Info>
                Welcome to an amazing experience ! You’re gonna join a colorfull world with amazing artwork. Everything is B&W but enable filter and discover the real aspect of the art.
                <br /><br /> - <br /><br />
                Once within the website, you will be able to test some filters on yourself, simply use your webcam to upload a picture of you and then apply a filter to it !
            </Info>
        </Content>
        <Bottom>
            <Copyright>Made by <a target="_blank" href="https://github.com/MisterAzix">Maxence B.</a> - <a target="_blank" href="https://www.behance.net/anaismancho">Anaïs M.</a> - <a target="_blank" href="https://linktr.ee/Gaetan_Jestin">Gaëtan J.</a></Copyright>
        </Bottom>
        <Marquee display="right" y="-404">
            start experience - start experience - start experience - start experience - start experience
        </Marquee>
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

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "top"
            "content"
            "bottom";
    }
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

const Content = styled.div`
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
    padding: 1.5rem 3rem;
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

    a {
        color: var(--text-color);
    }
`;