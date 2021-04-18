import styled from "styled-components";
import { Button, Jumbotron, ToggleButton } from "react-bootstrap";
import { variables } from "../../utilities/variables";

export const Wrapper = styled(Jumbotron)`
  background-color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.VeryDarkDesaturatedBlue
      : variables.light.VeryLightGray} !important;
  transition: background 0.5s;
  padding: 10px 20px !important;
  min-width: 40vw !important;
  border-radius: 0 0 10px 10px !important;
  width: 350px;
  &.empty {
    border-radius: 10px !important;
  }
`;

export const StyledParagraph = styled.p`
  color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.VeryDarkGrayishBlue
      : variables.light.DarkGrayishBlue};
  background-color: transparent !important;
  border: none !important;
  font-size: 0.7rem !important;
  cursor: default !important;
`;

export const StyledToggleButton = styled(ToggleButton)`
  color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.VeryDarkGrayishBlue
      : variables.light.DarkGrayishBlue};
  background-color: transparent !important;
  border: none !important;
  font-size: 0.7rem !important;
  &:focus {
    box-shadow: none !important;
  }
  &.focus {
    box-shadow: none !important;
  }
  &.active {
    color: ${variables.primary.BrightBlue} !important;
  }
  &:hover {
    color: ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.LightGrayishBlueHover
        : variables.light.VeryDarkGrayishBlue} !important;
  }
`;

export const StyledButton = styled(Button)`
  color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.VeryDarkGrayishBlue
      : variables.light.DarkGrayishBlue};
  background-color: transparent !important;
  border: none !important;
  font-size: 0.7rem !important;
  &:focus {
    box-shadow: none !important;
  }
  &.focus {
    box-shadow: none !important;
  }
  &.active {
    color: ${variables.primary.BrightBlue} !important;
  }
  &:hover {
    color: ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.LightGrayishBlueHover
        : variables.light.VeryDarkGrayishBlue} !important;
  }
`;
