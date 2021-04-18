import styled from "styled-components";
import { Button, Col, Form, Jumbotron, ToggleButton } from "react-bootstrap";
import { variables } from "../../utilities/variables";

export const Wrapper = styled(Jumbotron)`
  background-color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.VeryDarkDesaturatedBlue
      : variables.light.VeryLightGray} !important;
  transition: background 0.5s;
  border-radius: 0 !important;
  padding: 10px 20px !important;
  min-width: 40vw !important;
  border-bottom: 1px solid
    ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.DarkGrayishBlue
        : variables.light.DarkGrayishBlue};
  &.first {
    border-radius: 10px 10px 0 0 !important;
  }
`;

export const StyledToggleButton = styled(ToggleButton)`
  border: solid 2px
    ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.DarkGrayishBlue
        : variables.light.DarkGrayishBlue};
  border-radius: 100% !important;
  min-width: 40px;
  min-height: 42.5px;
  &.unchecked {
    border: solid 2px transparent;
    background-image: linear-gradient(
        ${(props) =>
          props.$isDarkModeOn
            ? `${variables.dark.VeryDarkDesaturatedBlue}, ${variables.dark.VeryDarkDesaturatedBlue}`
            : `${variables.light.VeryLightGray}, ${variables.light.VeryLightGray}`}
      ),
      linear-gradient(
        ${(props) =>
          props.$isDarkModeOn
            ? `${variables.dark.DarkGrayishBlue}, ${variables.dark.DarkGrayishBlue}`
            : `${variables.light.DarkGrayishBlue}, ${variables.light.DarkGrayishBlue}`}
      );
    background-origin: border-box;
    background-clip: padding-box, border-box;
    &:hover {
      background-image: linear-gradient(
          ${(props) =>
            props.$isDarkModeOn
              ? `${variables.dark.VeryDarkDesaturatedBlue}, ${variables.dark.VeryDarkDesaturatedBlue}`
              : `${variables.light.VeryLightGray}, ${variables.light.VeryLightGray}`}
        ),
        ${variables.primary.CheckBackground};
      transition: 1s;
    }
  }
  &.checked {
    border: none !important;
    background-image: ${variables.primary.CheckBackground} !important;
  }
  &.focus {
    box-shadow: none !important;
  }
  &:focus {
    border-color: ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.DarkGrayishBlue
        : variables.light.DarkGrayishBlue};
    box-shado: none !important;
  }
  &:active {
    border-color: ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.DarkGrayishBlue
        : variables.light.DarkGrayishBlue} !important;
  }
`;

export const StyledFormInput = styled(Form.Control)`
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  font-size: 1.2rem !important;
  cursor: pointer !important;
  color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.DarkGrayishBlue
      : variables.light.VeryDarkGrayishBlue} !important;
  &:focus {
    box-shadow: none !important;
  }
  &.line-through {
    text-decoration: line-through !important;
    color: ${(props) =>
      props.$isDarkModeOn
        ? variables.dark.VeryDarkGrayishBlue2
        : variables.light.DarkGrayishBlue} !important;
  }
`;

export const StyledCloseButton = styled(Button)`
  background-color: transparent !important;
  border: none !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export const XButtonColumn = styled(Col)`
  right: -9px !important;
  padding: 8px 0 !important;

  @media (max-width: 992px) {
    right: 0 !important;
  }
`;
