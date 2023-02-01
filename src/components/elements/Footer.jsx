import GardenColors from "../../config/colors";
import styled from "styled-components";


export default function Footer() {
  return (

    <StyledFooter>Copyright 2023 - Visit my portfolio at pabloai.net</StyledFooter>

  )
}
export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${GardenColors.landingPageBackground};
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: ${GardenColors.primaryTextColor};
`;