import styled from 'styled-components';
import GardenColors from "../config/colors";

export const GeneralContainer = styled.body`
background-color: ${GardenColors.landingPageBackground};
height: 100vh;
margin: 0 10px;`;

export const Container = styled.main`
    background-color: ${GardenColors.landingPageBackground};
    height: 100%;

    box-sizing: border-box;
`;
export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.h1`
    text-align: center;
    color: ${GardenColors.primaryTextColor};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    margin: 10 auto;
`;

export const SubHeader = styled.h2`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    margin: 10px auto;
    background: linear-gradient(90deg, ${GardenColors.gradientFirstStop} 24.2%, ${GardenColors.gradientSecondStop} 120.46%);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const TextWrapper = styled.div`
margin: 0px 100px;
`;

export const Text = styled.p`
    text-align: center;
    color: ${GardenColors.secondaryTextColor};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
`;

export const Image = styled.img`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;
