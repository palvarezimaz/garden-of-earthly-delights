import { Link } from "react-router-dom";
import styled from "styled-components";
import GardenColors from "../config/colors";

export const NavBarContainer = styled.nav`
  background-color: ${GardenColors.landingPageBackground};
  width: 100%;
  height: 50px;
  background-color: ${GardenColors.gradientFirstStop};
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const NavBarLinkContainer = styled.div`
  display: flex;
  `;

export const NavBarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: 'Helvetica';
  text-decoration: none;
  margin: 10px;
  &: hover,
  &:focus{
    color: ${GardenColors.gradientSecondStop};
  }
  &:active{
    color: ${GardenColors.gradientFirstStop};
  };
  @media(max-width: 650px) {
    display: none;
  }
  `;

export const ButtonLink = styled("button")`
width: 70px;
height: 50px;
background: none;
border: none:
color: ${GardenColors.secondaryTextColor};
font-size: 45px;
cursos: pointer;
@media(min-width: 650px) {
  display: none;
}
`;

// export const NavBar = styled.nav`
//     background-color: ${GardenColors.landingPageBackground};
//     text-align: center;
//     padding: 30px;
//     margin: 10px:
//     display: flex-rows;
//     justify-content: space-between;
//     align-items: center;
// `;