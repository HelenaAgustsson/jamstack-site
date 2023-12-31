import styled from 'styled-components';
import { breakpoint, sizes } from '../theme';

export const HeroContainer = styled.div`
    display:flex;
    margin-bottom: 30px;
    flex-direction: row;
`;

export const Hero = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background-image: ${({ image, }) => `
        image-set(
            url(${image}?fm=avif) type("image/avif"),
            url(${image}) type("image/jpeg")
        )`};
    background-position: center;
    background-size: cover;
`;

export const TitleContainer = styled.div`
    padding: 30px;
    font-size: 1.2em;
    background-color: #ffffff;
    width: 35%;
    margin: 25px;
    align-self: start;
    -webkit-box-pack: start;
    justify-content: flex-start;
`;
