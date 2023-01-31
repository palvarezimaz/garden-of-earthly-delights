import styled from 'styled-components';
import GardenColors from "../../config/colors";

export const Container = styled.main`
    background-color: ${GardenColors.landingPageBackground};
    height: 100vh;
    box-sizing: border-box;
`;
export const Wrapper = styled.div`
    width: 70vw;
    margin: auto;
    display: flex-rows;
    justify-content: space-between;
    align-items: center;
`;