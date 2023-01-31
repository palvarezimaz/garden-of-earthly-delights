import styled from "styled-components"
import { Link } from "react-router-dom"
import GardenColors from "../config/colors";

export default function Button(props) {
  return (
    <StyledButton to={props.to} style={{ width: props.width }}>
      {props.value}
    </StyledButton>
  )
}

export const StyledButton = styled(Link)`
height: 55px;
background: linear-gradient(
  90deg,
  ${GardenColors.gradientFirstStop} 24.2%,
  ${GardenColors.gradientSecondStop} 120.46%
);
border-radius: 10px;
padding: 0px 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
color: #FFFFFF;
font-family: "Helvetica";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
margin: auto;
&:hover {
  box-shadow: 5px 5px 10px 2px #0F0100;
}
`;
