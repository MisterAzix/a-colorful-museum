import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Marquee from '../components/Marquee';

export default function Artwork() {
    const artworkData = [
        {
            title: 'orange',
            name: 'The scream',
            author: 'EDWARD MUNCH',
            image: '/edward-munch.jpg',
            color: '#C37C3A',
            content: `The Scream is the most famous painting by Edvard Munch, 
            a Norwegian painter born on december 12nd of 1863 in Ådalsbruk, 
            Norway. He painted this iconic image of modern art in 1893, 
            as a part of a composition of four versions named The Scream of Nature. 
            This version is the first publicly displayed, and perhaps the most recognizable of this composition. 
            It’s a tempera on cardboard of 91 cm × 73.5 cm representing an autobiographical construction, 
            based on Munch's actual experience of a scream piercing through`
        },
        {
            title: 'red',
            name: 'The death of the virgin',
            author: 'CARAVAGGIO',
            image: '/caravaggio.jpg',
            color: '#A02524',
            content: `The Death of the Virgin is a painting by the Italian painter Michelangelo Merisi da Caravaggio, 
            better known just as Caravaggio. Born on september 29th of 1571 in Milan, Italy, 
            he is considered as one of the Baroque masters. He painted this sacred artwork around 1604. 
            It’s an oil on canvas of 369 cm × 245 cm representing the scene of the death of Mary, 
            almost at human scale. She is represented in the painting’s central theme, 
            laying down in a bright red dress and surrounded by crying and overwhelmed people. 
            The blood-red theatrical drape hangs in the upper portion of the canvas,`
        },
        {
            title: 'green',
            name: 'Young lady with gloves',
            author: 'TAMARA DE LEMPICKA',
            image: '/tamara-de-empicka.jpg',
            color: '#50A760',
            content: `Young lady with gloves is a painting by Tamara DeLempicka, 
            a Polish painter born on may 16th of 1898 in Varsovie. Real representative of the art deco movement, 
            she painted this artwork between 1927 and 1930. It’s an oil on canvas of 61,5 × 45,5 cm, 
            representing a portrait of an elegant blonde lady. Dressed with a classy green dress and many white accessories, 
            all highlighted by the very neutral gray background. Her body’s details are extremely sharped. 
            Her hand position, posture and facial expression are made to accentuate her luxurious and`
        },
        {
            title: 'blue',
            name: 'Girl with a pearl earring',
            author: 'JOHANESS VERMEER',
            image: '/johaness-vermeer.jpg',
            color: '#7091C0',
            content: `Girl with a pearl earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, 
            born on october 31st of 1632 in Delft, Holland. It’s been estimated that he painted this portrait around 1665. 
            It’s an oil on canvas of 44.5 cm × 39 cm representing a young woman with the tronie technique : 
            the Dutch 17th-century description of a personnage representation, that wasn’t meant to be a portrait. 
            The woman portrayed here is a young European girl, wearing an oriental`
        },
        {
            title: 'yellow',
            name: 'Vase with twelve sunflowers',
            author: 'VINCENT VAN GOGH',
            image: '/vincent-van-gogh.jpg',
            color: '#D5AD48',
            content: `Vase with twelve sunflowers is a painting by the famous Dutch painter Vincent Van Gogh, 
            born on march 30th of 1853 in Zundert, Netherlands. 
            Real Post-Impressionist painter and contributor to the foundations of modern art, 
            he is known for having an astonishing fascination with sunflowers, and his still life representations of it. 
            Indeed, this painting is part of his second series of sunflowers representations : 
            The Arles Sunflowers, made in august 1888, succeeding The Paris Sunflowers, made two years before.`
        }
    ];

    const [index, incrementIndex] = useState(0);
    const [activePost, setActivePost] = useState();
    const [filter, toggleFilter] = useState(false);

    useEffect(() => {
        setActivePost(artworkData[index]);
    }, [index]);

    useEffect(() => {
        if (filter) {
            document.documentElement.style.setProperty('--text-color', '#212121');
            document.documentElement.style.setProperty('--background-color', artworkData[index].color);
            document.body.style.setProperty('color', '#212121');
            document.body.style.setProperty('background-color', artworkData[index].color);
        } else {
            document.documentElement.style.removeProperty('--text-color');
            document.documentElement.style.removeProperty('--background-color');
            document.body.style.removeProperty('color');
            document.body.style.removeProperty('background-color');
        }
    }, [filter])

    const handlePrevious = () => {
        toggleFilter(false);
        incrementIndex((index - 1) % (artworkData.length) < 0 ? 4 : (index - 1) % (artworkData.length));
    }

    const handleNext = () => {
        toggleFilter(false);
        incrementIndex((index + 1) % (artworkData.length));
    }

    const handleFilter = () => {
        toggleFilter(!filter);
    }

    return <Grid color={activePost?.color}>
        <Marquee onClick={handlePrevious} display="left" y="-460">
            previous - previous - previous - previous - previous - previous - previous - previous
        </Marquee>
        <Top><Link href="/" passHref><Title><h1>{activePost?.title}</h1></Title></Link></Top>
        <ContentLeft filter={filter}>
            <img src={activePost?.image} />
        </ContentLeft>
        <ContentRight>
            <h3>{activePost?.name}</h3>
            <h4>{activePost?.author}</h4>
            <br />
            <p>{activePost?.content}</p>
        </ContentRight>
        <ContentBottomRight>
            <Button onClick={handleFilter}>{filter ? 'disable filter' : 'enable filter'}</Button>
        </ContentBottomRight>
        <Bottom>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0L16.8058 4.6208C17.7478 10.0224 21.9776 14.2522 27.3792 15.1942L32 16L27.3792 16.8058C21.9776 17.7478 17.7478 21.9776 16.8058 27.3792L16 32L15.1942 27.3792C14.2522 21.9776 10.0224 17.7478 4.6208 16.8058L0 16L4.6208 15.1942C10.0224 14.2522 14.2522 10.0224 15.1942 4.6208L16 0Z" fill="white" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0L16.8058 4.6208C17.7478 10.0224 21.9776 14.2522 27.3792 15.1942L32 16L27.3792 16.8058C21.9776 17.7478 17.7478 21.9776 16.8058 27.3792L16 32L15.1942 27.3792C14.2522 21.9776 10.0224 17.7478 4.6208 16.8058L0 16L4.6208 15.1942C10.0224 14.2522 14.2522 10.0224 15.1942 4.6208L16 0Z" fill="white" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0L16.8058 4.6208C17.7478 10.0224 21.9776 14.2522 27.3792 15.1942L32 16L27.3792 16.8058C21.9776 17.7478 17.7478 21.9776 16.8058 27.3792L16 32L15.1942 27.3792C14.2522 21.9776 10.0224 17.7478 4.6208 16.8058L0 16L4.6208 15.1942C10.0224 14.2522 14.2522 10.0224 15.1942 4.6208L16 0Z" fill="white" />
                </svg>
            </div>
        </Bottom>
        <Marquee onClick={handleNext} display="right" y="-375">
            next - next - next - next - next - next - next - next - next - next - next - next - next
        </Marquee>
    </Grid>
}

function getSpanGradient() {
    let str = '';
    for (let i = 0; i < 8; i++) {
        str += `
            &:nth-child(${i + 1}) {
                background-color: rgba(255, 255, 255, ${10 * i / 100});
            }
        `;
    }
    return str;
}

const Grid = styled.div`
    box-sizing: border-box;
    display: grid;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    text-align: center;
    grid-template-rows: 6rem calc(50vh - 6rem * 2) 25vh 25vh 6rem;
    grid-template-columns: 6rem min-content 1fr 6rem;
    grid-template-areas:
        "marqueeL top top marqueeR"
        "marqueeL contentLeft contentRight marqueeR"
        "marqueeL contentLeft contentRight marqueeR"
        "marqueeL contentLeft contentBottomRight marqueeR"
        "marqueeL bottom contentBottomRight marqueeR";

    @media screen and (max-width: 1100px) {
        grid-template-rows: 6rem calc(100vh - 6rem * 2) 6rem min-content 6rem;
        grid-template-columns: 1fr;
        grid-template-areas:
            "top"
            "contentLeft"
            "contentBottomRight"
            "contentRight"
            "bottom";
    }
`;

const Top = styled.div`
    grid-area: top;
    border: 1px solid var(--text-color);
    display: flex;
    justify-content: center;
`;

const Title = styled.div`
    border: 1px solid var(--text-color);
    min-width: 32rem;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ContentLeft = styled.div`
    grid-area: contentLeft;
    border: 1px solid var(--text-color);
    padding: 2rem;
    position: relative;
    max-height: calc(100vh - 96px * 2);

    img {
        width: auto;
        height: 100%;
        filter: ${props => !props.filter && 'grayscale()'};
    }
`;

const ContentRight = styled.div`
    grid-area: contentRight;
    border: 1px solid var(--text-color);
    padding: 2rem;
    text-align: left;
    overflow: scroll;
`;

const ContentBottomRight = styled.div`
    grid-area: contentBottomRight;
    text-align: left;
    border: 1px solid var(--text-color);
`;

const Button = styled.button`
    border: 1px solid var(--text-color);
    background: none;
    outline: none;
    cursor: pointer;
    color: var(--text-color);
    padding: 1.5rem 3rem;
    font-size: 3rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    @media screen and (max-width: 1100px) {
        width: 100%;
        border: none;
    }

    &:hover {
        background-color: var(--text-color);
        color: var(--background-color);
    }
`;

const Bottom = styled.div`
    grid-area: bottom;
    border: 1px solid var(--text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    div:first-child {
        
        span {
            display: inline-block;
            border: 1px solid var(--text-color);
            height: 1.5rem;
            width: 1.5rem;

            ${getSpanGradient()}
        }
    }

    div:last-child {
        display: flex;
        gap: 1rem;

        svg path {
            fill: var(--text-color);
        }
    }
`;