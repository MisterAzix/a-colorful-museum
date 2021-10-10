import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export default function Marquee({ children, ...props }) {

    const marqueeVariants = {
        animateLeft: {
            y: [0, parseInt(props.y)],
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
            y: [parseInt(props.y), 0],
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

    return <MarqueeDiv display={props.display}><motion.span
        variants={marqueeVariants}
        animate={props.display === "left" ? "animateLeft" : "animateRight"}
    >
        {children}
    </motion.span></MarqueeDiv>

}

const MarqueeDiv = styled.div`
    grid-area: ${props => props.display === "left" ? "marqueeL" : props.display === "right" ? "marqueeR" : ""};
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: 1px solid var(--text-color);

    @media screen and (max-width: 1100px) {
        display: none;
    }
    
    span {
        font-size: 3rem;
        writing-mode: vertical-lr;
        white-space: nowrap;
        font-family: 'Ammonite', sans-serif;
        position: absolute;
        will-change: transform;
        user-select: none;

        ${props => props.display === "left" && css`
            transform: rotate(180deg);
        `};
    }
`;