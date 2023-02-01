import styled from 'styled-components';
import GardenColors from "../config/colors";

export const GeneralContainer = styled.body`
background-color: ${GardenColors.landingPageBackground};
height: 100vh;`;

export const Container = styled.main`
    background-color: ${GardenColors.landingPageBackground};
    height: 100%;
    margin: 10px;
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
export const NavBar = styled.nav`
    background-color: ${GardenColors.landingPageBackground};
    text-align: center;
    padding: 30px;
    margin: 10px:
    display: flex-rows;
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
    margin: 0 auto;
`;

export const SubHeader = styled.h2`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto;
    background: linear-gradient(90deg, ${GardenColors.gradientFirstStop} 24.2%, ${GardenColors.gradientSecondStop} 120.46%);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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


// Unused

export const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;