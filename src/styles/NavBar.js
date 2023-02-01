import { Link } from "react-router-dom";
import styled from "styled-components";
import GardenColors from "../config/colors";

export const NavBarContainer = styled.nav`
  background-color: ${GardenColors.landingPageBackground};
  width: 100%;
  height: 50px;
  background-color: purple;
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
    color: blue;
  }
  &:active{
    color: red;
  };
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