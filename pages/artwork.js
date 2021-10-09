import styled from 'styled-components';
import { motion } from 'framer-motion';

const marqueeVariants = {
    animateLeft: {
        y: [0, -460],
        rotateZ: 180,
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear"
            },
            rotateZ: {
                duration: 0,
            }
        }
    },
    animateRight: {
        y: [-375, 0],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};

export default function Artwork() {
    return <Grid>
        <MarqueeLeft><motion.span
            className="track"
            variants={marqueeVariants}
            animate="animateLeft"
        >
            previous - previous - previous - previous - previous - previous - previous - previous
        </motion.span></MarqueeLeft>
        <Top><Title><h1>green</h1></Title></Top>
        <ContentLeft>
            <img src="/tamara-de-empicka.jpg" />
        </ContentLeft>
        <ContentRight>
            <p>
                Young lady with gloves is a painting by Tamara DeLempicka, a Polish painter born on may 16th of 1898 in Varsovie. Real representative of the art deco movement, she painted this artwork between 1927 and 1930.
                <br /><br />It’s an oil on canvas of 61,5 × 45,5 cm, representing a portrait of an elegant blonde lady. Dressed with a classy green dress and many white accessories, all highlighted by the very neutral gray background. Her body’s details are extremely sharped. Her hand position, posture and facial expression are made to accentuate her luxurious and sumptuous aura. The sharp-edged form (inspired by neo-cubism) combined with the bold use of colour green render a strongly dimensional and modern painting.
                <br /><br />If you want so, you can actually contemplate this painting in Paris, at the National Museum of Modern Art in the Pompidou Center.
            </p>
        </ContentRight>
        <Bottom></Bottom>
        <MarqueeRight><motion.span
            className="track"
            variants={marqueeVariants}
            animate="animateRight"
        >
            next - next - next - next - next - next - next - next - next - next - next - next - next
        </motion.span></MarqueeRight>
    </Grid>
}

const Grid = styled.div`
    box-sizing: border-box;
    display: grid;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    text-align: center;
    grid-template-rows: 6rem calc(100vh - 6rem * 2) 6rem;
    grid-template-columns: 6rem min-content 1fr 6rem;
    grid-template-areas:
        "marqueeL top top marqueeR"
        "marqueeL contentLeft contentRight marqueeR"
        "marqueeL bottom contentRight marqueeR";

    @media screen and (max-width: 1100px) {
        grid-template-rows: 6rem calc(100vh - 6rem * 2) 6rem calc(100vh - 6rem * 2) 6rem;
        grid-template-columns: 1fr;
        grid-template-areas:
            "top"
            "contentLeft"
            "marqueeR"
            "contentRight"
            "bottom";
    }
`;

const Marquee = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
        font-size: 3rem;
        writing-mode: vertical-lr;
        white-space: nowrap;
        font-family: 'Ammonite', sans-serif;
        position: absolute;
        will-change: transform;
        user-select: none;

        @media screen and (max-width: 1100px) {
            writing-mode: horizontal-tb;
        }
    }
`;

const MarqueeLeft = styled(Marquee)`
    grid-area: marqueeL;
    border: 1px solid var(--text-color);

    @media screen and (max-width: 1100px) {
        display: none;
    }

    span {
        transform: rotate(180deg);
    }
`;

const MarqueeRight = styled(Marquee)`
    grid-area: marqueeR;
    border: 1px solid var(--text-color);
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
    }
`;

const ContentRight = styled.div`
    grid-area: contentRight;
    border: 1px solid var(--text-color);
    padding: 2rem;
`;

const Bottom = styled.div`
    grid-area: bottom;
    border: 1px solid var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;