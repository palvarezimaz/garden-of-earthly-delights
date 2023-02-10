import { Link } from "react-router-dom";
import styled from "styled-components";
import GardenColors from "../config/colors";

export const NavBarContainer = styled.nav`
  background-color: ${GardenColors.landingPageBackground};
  width: 100%;
  height:${(props) => (props.extend ? "100vh" : "50px")};
  background-color: ${GardenColors.gradientFirstStop};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 650px){
    height: 60px;
  }
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

///// Extended styles
export const ExtendedNavBar = styled("div")`
  display: flex;
  background-color: ${GardenColors.gradientFirstStop};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 10px;
  &:hover {
      box-shadow: 5px 5px 10px 2px #0F0100;
  @media (min-width: 650px){
    display: none;

}`

export const NavBarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: 'Helvetica';
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus{
    color: ${GardenColors.gradientSecondStop};
};
&:active{
    color: ${GardenColors.gradientFirstStop};
};
  `